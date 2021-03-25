import {authApi} from "../api/api";

const SET_IS_FETCH = 'SET_IS_FETCH'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_INITIALIZE = 'SET_INITIALIZE'

let initialState = {
    isFetch: false,
    isAuth: false, //Залогинен ли пользователь
    isInitialize: false, //Инициализация приложения
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCH:
            return {
                ...state,
                isFetch: action.isFetch
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_INITIALIZE:
            return {
                ...state,
                isInitialize: action.isInitialize
            }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetch) => ({type: SET_IS_FETCH, isFetch})
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})
export const setInitialize = (isInitialize) => ({type: SET_INITIALIZE, isInitialize})

export const login = (username, password, setSubmitting) => { //Логин
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await authApi.login(username,password)
            console.log('login', response)
            dispatch(setIsAuth(true))
            localStorage.setItem('accessToken', response.data.access)
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('Login error', error.toJSON())
            window.alert('Login error')
            setSubmitting(false)
            dispatch(toggleIsFetching(false))
        }
    }
}

export const initializing = () => { //Выход
    return (dispatch) => {
        let token = localStorage.getItem('accessToken');
        if(token === null) {
            dispatch(setInitialize(true))
        }
        else {
            dispatch(setIsAuth(true))
            dispatch(setInitialize(true))
        }
    }
}
export const logout = () => { //Выход
    return (dispatch) => {
        localStorage.removeItem('accessToken');
        dispatch(setIsAuth(false))
    }
}

export default authReducer

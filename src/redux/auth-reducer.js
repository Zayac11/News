import {authApi} from "../api/api";

const SET_IS_FETCH = 'SET_IS_FETCH'
const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
    isFetch: false,
    isAuth: false, //Залогинен ли пользователь
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
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetch) => ({type: SET_IS_FETCH, isFetch})
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})

export const login = (username, password) => { //Логин
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await authApi.login(username,password)
            debugger
            console.log('login', response)
            dispatch(setIsAuth(true))
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('Login error', error.toJSON())
            window.alert('Login error')
            dispatch(toggleIsFetching(false))
        }
    }
}

export default authReducer

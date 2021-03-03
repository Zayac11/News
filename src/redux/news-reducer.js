import {newsApi} from "../api/api";
import {toggleIsFetching} from "./auth-reducer";

const SET_NEWS = 'SET_NEWS'

let initialState = {
    isFetch: false,
    news: [], //Список арен
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }
        default:
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news})

export const getNews = (letters) => { //Получение списка новостей
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.getNews(letters)
            console.log('getNews', response)

            if(response.status === 200) {
                dispatch(setNews(response.data.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('getNewsError', error.toJSON())
            window.alert('getNews Error')
            dispatch(toggleIsFetching(false))
        }
    }
}

export default newsReducer

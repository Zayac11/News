import {toggleIsFetching} from "./auth-reducer";
import {infoSidebarApi} from "../api/api";

const SET_POPULAR_AND_PINNED_NEWS = 'SET_POPULAR_AND_PINNED_NEWS'

let initialState = {
    pinned: [], //Список закрепленных новостей новостей
    popular: [], //Список популярных новостей новостей
}

const infoSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_AND_PINNED_NEWS:
            return {
                ...state,
                pinned: action.news.pinned_messages,
                popular: action.news.most_popular_messages,
            }
        default:
            return state;
    }
}

export const setPopularAndPinnedNews = (news) => ({type: SET_POPULAR_AND_PINNED_NEWS, news})

export const getPopularAndPinnedNews = () => { //Получение списка популярных и закрепленных новостей
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await infoSidebarApi.getPopularAndPinnedNews()
            console.log('getPopularAndPinnedNews', response)
            if(response.status === 200) {
                dispatch(setPopularAndPinnedNews(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('getPopularAndPinnedNews Error', error.toJSON())
            window.alert('getPopularAndPinnedNews Error')
            dispatch(toggleIsFetching(false))
        }
    }
}

export default infoSidebarReducer

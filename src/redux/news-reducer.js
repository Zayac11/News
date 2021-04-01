import {newsApi} from "../api/api";
import {toggleIsFetching} from "./auth-reducer";

const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_NEWS_DATA = 'SET_NEWS_DATA'

let initialState = {
    newsCards: [], //Список новостей
    count: 0, //Общее число новостей
    pageSize: 3, //Сколько карточек выводится на странице, пока стоит единица
    currentPage: 1, //Номер текущей страницы
    newsData: {},
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                newsCards: action.news.products,
                count: action.news.count,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_NEWS_DATA:
            return {
                ...state,
                newsData: {
                    ...action.newsData,
                    content: JSON.parse(action.newsData.content),
                    title: action.newsData.title,
                    short_description: action.newsData.short_description,
                    img: action.newsData.img,
                    category: action.newsData.category,
                },
            }
        default:
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news})
export const setCurrentNews = (newsData) => ({type: SET_NEWS_DATA, newsData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const getRecentNews = (letters, pageNumber) => { //Получение списка последних новостей
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.getRecentNews(letters, pageNumber)
            console.log('getRecentNews', response)
            if(response.status === 200) {
                dispatch(setNews(response.data))
                dispatch(setCurrentPage(pageNumber))

            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('getRecentNewsError', error.toJSON())
            window.alert('getRecentNews Error')
            dispatch(toggleIsFetching(false))
        }
    }
}
export const getCurrentNews = (newsId) => { //Получение новости
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.getCurrentNews(newsId)
            console.log('getCurrentNews', response)
            if(response.status === 200) {
                dispatch(setCurrentNews(response.data.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('getCurrentNews Error', error.toJSON())
            window.alert('getCurrentNews Error')
            dispatch(toggleIsFetching(false))
        }
    }
}

export const getNewsCategory = (category, pageNumber) => { //Получение новостей по категории
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.getNewsCategory(category, pageNumber)
            console.log('getNewsCategory', response)
            if(response.status === 200) {
                dispatch(setNews(response.data))
                dispatch(setCurrentPage(pageNumber))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('getNewsCategoryError', error.toJSON())
            window.alert('getNewsCategory Error')
            dispatch(toggleIsFetching(false))
        }
    }
}

export const createNews = (title, img, short_description, content, category, setSubmitting) => { //Создание новости
    return async (dispatch) => {

        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.createNews(title, img, short_description, content, category)
            console.log('createNews', response)
            if(response.status === 200) {
                dispatch(setCurrentNews(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('createNews', error.toJSON())
            window.alert('createNews Error')
            setSubmitting(false)
            dispatch(toggleIsFetching(false))
        }
    }
}
export const updateNews = (newsId, title, img, short_description, content, category, setSubmitting) => { //Изменение новости
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.updateNews(newsId,title, img, short_description, content, category)
            console.log('updateNews', response)
            if(response.status === 200) {
                // dispatch(setCurrentNews(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('updateNews', error.toJSON())
            window.alert('updateNews Error')
            setSubmitting(false)
            dispatch(toggleIsFetching(false))
        }
    }
}
export const deleteNews = (newsId, setSubmitting) => { //Удаление новости
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.deleteNews(newsId)
            console.log('deleteNews', response)
            if(response.status === 200) {
                debugger
                // dispatch(setCurrentNews(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('deleteNews', error.toJSON())
            window.alert('deleteNews Error')
            setSubmitting(false)
            dispatch(toggleIsFetching(false))
        }
    }
}

export default newsReducer

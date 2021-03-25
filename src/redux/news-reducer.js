import {newsApi} from "../api/api";
import {toggleIsFetching} from "./auth-reducer";

const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_NEWS_DATA = 'SET_NEWS_DATA'

let initialState = {
    isFetch: false,
    newsCards: [], //Список новостей
    count: 0, //Общее число новостей
    pageSize: 1, //Сколько карточек выводится на странице, пока стоит единица
    currentPage: 1, //Номер текущей страницы

    newsData: {
        content: {
            call: {
                "entityMap":{

                },
                "blocks":[
                    {
                        "key":"637gr",
                        "text":"Hello wanderer",
                        "type":"unstyled",
                        "depth":0,
                        "inlineStyleRanges":[

                        ],
                        "entityRanges":[

                        ],
                        "data":{

                        }
                    }
                ]
            },
            wait: "",
        },
        title: 'Hoba',
        short_description: 'Hobaboba',
        img: 'imgg',
        category: 'Мир',
        id: 228,
        created_at: 'Вчера'
    }
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
                newsData: action.newsData,
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

export const createNews = (title, img, short_description, content, category) => { //Создание новости
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        debugger
        try {
            let response = await newsApi.createNews(title, img, short_description, content, category)
            console.log('createNews', response)
            if(response.status === 200) {
                debugger
                dispatch(setCurrentNews(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('createNews', error.toJSON())
            window.alert('createNews Error')
            dispatch(toggleIsFetching(false))
        }
    }
}
export const updateNews = (newsId, title, img, short_description, content, category) => { //Изменение новости
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let response = await newsApi.updateNews(newsId,title, img, short_description, content, category)
            console.log('updateNews', response)
            if(response.status === 200) {
                debugger
                // dispatch(setCurrentNews(response.data))
            }
            dispatch(toggleIsFetching(false))
        }
        catch (error) {
            console.log('updateNews', error.toJSON())
            window.alert('updateNews Error')
            dispatch(toggleIsFetching(false))
        }
    }
}
export const deleteNews = (newsId) => { //Удаление новости
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
            dispatch(toggleIsFetching(false))
        }
    }
}

export default newsReducer

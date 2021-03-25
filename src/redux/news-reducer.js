import {newsApi} from "../api/api";
import {toggleIsFetching} from "./auth-reducer";

const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

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
        id: 228
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
        default:
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news})
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

export default newsReducer

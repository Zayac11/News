import {toggleIsFetching} from "./auth-reducer";
import {infoSidebarApi} from "../api/api";

const SET_POPULAR_AND_PINNED_NEWS = 'SET_POPULAR_AND_PINNED_NEWS'
const SET_COVID_INFORMATION = 'SET_COVID_INFORMATION'
const SET_MOSCOW_WEATHER = 'SET_MOSCOW_WEATHER'
const SET_CURRENCY = 'SET_CURRENCY'

let initialState = {
    pinned: [], //Список закрепленных новостей новостей
    popular: [], //Список популярных новостей новостей
    newCases: '',
    total: null,
    moscowTemp: null,
    eur: null,
    usd: null,
}

const infoSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_AND_PINNED_NEWS:
            return {
                ...state,
                pinned: action.news.pinned_messages,
                popular: action.news.most_popular_messages,
            }
        case SET_COVID_INFORMATION:
            return {
                ...state,
                total: action.info.total,
                newCases: action.info.new,
            }
        case SET_MOSCOW_WEATHER:
            return {
                ...state,
                moscowTemp: action.moscowTemp,
            }
        case SET_CURRENCY:
            return {
                ...state,
                eur: (1/(action.EUR)).toFixed(2),
                usd: (1/(action.USD)).toFixed(2),
            }
        default:
            return state;
    }
}

export const setPopularAndPinnedNews = (news) => ({type: SET_POPULAR_AND_PINNED_NEWS, news})
export const setCovidInformation = (info) => ({type: SET_COVID_INFORMATION, info})
export const setMoscowWeather = (moscowTemp) => ({type: SET_MOSCOW_WEATHER, moscowTemp})
export const setCurrency = (EUR, USD) => ({type: SET_CURRENCY, EUR, USD})

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

export const getCovidInformation = () => {
    return async (dispatch) => {
        try {
            let data = await infoSidebarApi.getCovidInformation()
            console.log('getCovidInformation', data)
            dispatch(setCovidInformation(data))
        }
        catch (err) {
            console.log('getPopularAndPinnedNews Error', err.toJSON())
            // window.alert('getCovidInformation Error')
        }
    }
}
export const getMoscowWeather = () => {
    return async (dispatch) => {
        try {
            let data = await infoSidebarApi.getMoscowWeather()
            console.log('getMoscowWeather', data)

            dispatch(setMoscowWeather(data))
        }
        catch (err) {
            window.alert('getMoscowWeather Error')
        }
    }
}
export const getCurrency = () => {
    return async (dispatch) => {
        try {
            let data = await infoSidebarApi.getCurrency()
            console.log('getCurrency', data)
            dispatch(setCurrency(data["EUR"], data["USD"]))
        }
        catch (err) {
            window.alert('getCurrency Error')
        }
    }
}

export default infoSidebarReducer

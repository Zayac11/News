import * as axios from "axios";

const debug = false
//true - localhost
//false - prod.

let baseUrl = ""

if (debug) {
    baseUrl = process.env.REACT_APP_BASE_URL
}
else {
    baseUrl = process.env.REACT_APP_PRODUCTION_URL
}

export const newsApi = {
    getNews(find_by_letters) {//Получение списка всех последних новостей, с возможностью поиска
        return axios.post(baseUrl + `api/recent_news`, find_by_letters)
    },
}

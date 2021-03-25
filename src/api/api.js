import * as axios from "axios";

const debug = false
//true - localhost
//false - prod.

let baseUrl = ""

if (debug) {
    baseUrl = "http://127.0.0.1:8000/"
}
else {
    baseUrl = process.env.REACT_APP_PRODUCTION_URL
}

const getFormData = (mass, auth) => { //Если нужен Bearer token, то auth = true
    let formdata = new FormData();

    mass.map(m => {
        return formdata.append(m.name, m.value);
    })

    return formdata;
}

export const newsApi = {

    getRecentNews(find_by_letters, pageNumber) {//Получение списка всех последних новостей, с возможностью поиска
        let data = getFormData([{name: 'find_by_letters', value: find_by_letters}])
        return axios.post(baseUrl +`api/recent_news?page=${pageNumber}`, data)
    },

    getNewsCategory(category, pageNumber) {//Получение списка всех последних новостей по конкретной категории
        let data = getFormData([{name: 'category', value: category}])
        return axios.post(baseUrl +`api/news_of_current_category?page=${pageNumber}`, data)
    },

}
export const authApi = {

    login(username, password) { //Логин
        let data = getFormData([{name: 'username', value: username}, {name: 'password', value: password}])
        return axios.post(baseUrl + `auth/jwt/create/`, data)
    },

}

import * as axios from "axios";

let baseUrl = process.env.REACT_APP_PRODUCTION_URL

if(baseUrl === undefined) {
    window.alert('Не удалось получить доступ к переменной окружения REACT_APP_PRODUCTION_URL')
}

const getFormData = (mass, auth) => { //Если нужен Bearer token, то auth = true
    let formdata = new FormData();

    mass.map(m => {
        return formdata.append(m.name, m.value);
    })

    return formdata;
}

const getHeaders = () => {
    const accessToken = 'Bearer  ' + localStorage.getItem('accessToken')
    let myHeaders = new Headers();
    myHeaders.append("Authorization", accessToken);
    return myHeaders
}

export const newsApi = {

    getRecentNews(find_by_letters, pageNumber) {//Получение списка всех последних новостей, с возможностью поиска
        let data = getFormData([{name: 'find_by_letters', value: find_by_letters}])
        return axios.post(baseUrl +`api/recent_messages?page=${pageNumber}`, data)
    },

    getNewsCategory(category, pageNumber) {//Получение списка всех последних новостей по конкретной категории
        let data = getFormData([{name: 'category', value: category}])
        return axios.post(baseUrl +`api/news_of_current_category?page=${pageNumber}`, data)
    },
    getCurrentNews(newsId) {//Получение списка всех последних новостей по конкретной категории
        let data = getFormData([{name: 'message_pk', value: newsId}])
        return axios.post(baseUrl +`api/current_message`, data)
    },

    createNews(title, img, short_description, content, category) { //Создание новости
        let data = getFormData([{name: 'title', value: title}, {name: 'img', value: img}, {name: 'short_description', value: short_description},
            {name: 'content', value: JSON.stringify(content)}, {name: 'category', value: category}])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.post(baseUrl +`api/add_or_change_message`, data,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            })
    },

    updateNews(newsId, title, img, short_description, content, category) { //Изменение новости
        let data = getFormData([{name: 'title', value: title}, {name: 'img', value: img}, {name: 'short_description', value: short_description},
            {name: 'content', value: JSON.stringify(content)}, {name: 'category', value: category}, {name: 'message_pk', value: newsId}])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.put(baseUrl +`api/add_or_change_message`, data,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            }
        )
    },

    deleteNews(newsId) { //Удаление новости
        let data = getFormData([{name: 'message_pk', value: newsId}])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.delete(baseUrl +`api/add_or_change_message`,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
                data
            }
        )
    },

}
export const authApi = {

    login(username, password) { //Логин
        let data = getFormData([{name: 'username', value: username}, {name: 'password', value: password}])
        return axios.post(baseUrl + `auth/jwt/create`, data)
    },

}

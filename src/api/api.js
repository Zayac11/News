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

    getPopularNews(pageNumber) {//Получение списка всех последних новостей, с возможностью поиска
        // debugger
        let data = getFormData([])
        return axios.post(baseUrl +`api/popular_news?page=${pageNumber}`, data)
    },

    getNewsCategory(category, pageNumber) {//Получение списка всех последних новостей по конкретной категории
        let data = getFormData([{name: 'category', value: category}])
        return axios.post(baseUrl +`api/news_of_current_category?page=${pageNumber}`, data)
    },

    getCurrentNews(newsId) {//Получение списка всех последних новостей по конкретной категории
        let data = getFormData([{name: 'message_pk', value: newsId}])
        return axios.post(baseUrl +`api/current_message`, data)
    },

    createNews(title, img, short_description, content, category, isPinned) { //Создание новости
        let data = getFormData([{name: 'title', value: title}, {name: 'img', value: img}, {name: 'short_description', value: short_description},
            {name: 'content', value: JSON.stringify(content)}, {name: 'category', value: category}, {name: 'is_pinned', value: isPinned}])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.post(baseUrl +`api/add_or_change_message`, data,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            })
    },

    updateNews(newsId, title, img, short_description, content, category, isPinned) { //Изменение новости
        let data = getFormData([{name: 'title', value: title}, {name: 'img', value: img}, {name: 'short_description', value: short_description},
            {name: 'content', value: JSON.stringify(content)}, {name: 'category', value: category}, {name: 'message_pk', value: newsId}, {name: 'is_pinned', value: isPinned}])
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

    incrementViewCounter(newsId) { //Увеличить кол-вол просмотров новости
        // let data = getFormData([{name: 'pk', value: newsId}])
        return axios.post(baseUrl +`api/update_view_counter/${newsId}`)
    }

}
export const authApi = {

    login(username, password) { //Логин
        let data = getFormData([{name: 'username', value: username}, {name: 'password', value: password}])
        return axios.post(baseUrl + `auth/jwt/create`, data)
    },

}

export const infoSidebarApi = {
    getPopularAndPinnedNews() {
        return axios.post(baseUrl + `api/get_most_popular_and_pinned_messages`)
    },

    getCovidInformation() {

        const ApiKey = 'acdf13f780msh3d1ae28246c6fdbp1d19a5jsn4bfb102b1e40'
        let myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", ApiKey);
        myHeaders.append("x-rapidapi-host", 'covid-193.p.rapidapi.com');

        return axios.get('https://covid-193.p.rapidapi.com/statistics?country=Russia',
            {
                headers: {
                    'x-rapidapi-key': ApiKey,
                    "x-rapidapi-host": 'covid-193.p.rapidapi.com'
                }
            }
        ).then(response => response.data.response[0].cases)
    },

    getMoscowWeather() {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=moscow&appid=178ae9a5a359aa5a542be240bd36bc59&units=metric')
            .then(response => response.data.main.temp)
    },
    getCurrency() {
        return axios.get('https://www.cbr-xml-daily.ru/latest.js')
            .then(response => response.data.rates)
    },
}

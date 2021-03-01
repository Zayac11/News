import React from 'react'
import {compose} from "redux";
import s from './NewsList.module.scss'

//Общая компонента с выводом карточек новостей
const NewsList = (props) => {
    return (
        <div className={s.newsList}>

        </div>
    )
}

export default compose()(NewsList)

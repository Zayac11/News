import React from 'react'
import {compose} from "redux";
import s from './SectionSidebar.module.scss'
import {NavLink} from "react-router-dom";

const SectionSidebar = (props) => {
    return (
        <aside className={s.sidebar}>
            <h3 className={s.title}>
                Разделы сайта
            </h3>

            <ul className={s.list}>
                <li><NavLink className={s.link} exact activeClassName={s.active} to="/">Главная</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/sport">Спорт</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/politics">Политика</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/science">Наука</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/world">Мир</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/culture">Культура</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/economic">Экономика</NavLink></li>
                <li><NavLink className={s.link} activeClassName={s.active} to="/news/internet">Интернет</NavLink></li>
            </ul>
        </aside>
    )
}

export default compose()(SectionSidebar)

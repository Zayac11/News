import React from 'react'
import {compose} from "redux";
import s from './InfoSidebar.module.scss'
import {NavLink} from "react-router-dom";

const InfoSidebar = (props) => {
    return (
        <>
            <div className={s.sidebar}>
                <div className={s.info}>
                    Информация
                </div>
                <div className={s.news}>
                    {
                        props.popular &&
                        props.popular.length > 0 &&
                        <div className={s.newsList}>
                            <h2 className={s.title}>Популярные</h2>
                            <div className={s.newsContainer}>
                                {
                                    props.popular.map((p, index) => {
                                        return (
                                            <NavLink to={`/current_news/${p.id}`} className={s.newsItem} key={index}>
                                                <div className={s.newsTitle}>
                                                    {p.title}
                                                </div>
                                                <div className={s.newsTime}>
                                                    {p.created_at}
                                                </div>
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        props.pinned &&
                        props.pinned.length > 0 &&
                        <div className={s.newsList}>
                            <h2 className={s.title}>Важные</h2>
                            <div className={s.newsContainer}>
                                {
                                    props.pinned.map((p, index) => {
                                        return (
                                            <NavLink to={`/current_news/${p.id}`} className={s.newsItem} key={index}>
                                                <div className={s.newsTitle}>
                                                    {p.title}
                                                </div>
                                                <div className={s.newsTime}>
                                                    {p.created_at}
                                                </div>
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default compose()(InfoSidebar)

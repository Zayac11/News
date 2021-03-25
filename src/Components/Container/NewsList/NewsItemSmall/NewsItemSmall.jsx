import React from "react";
import s from './NewsItemSmall.module.scss'
import {NavLink} from "react-router-dom";

const NewsItemSmall = (props) => {
    return (
        <NavLink to={`/current_news/${props.id}`} className={s.news}>
            <h5 className={s.title}>
                {props.title}
            </h5>
            <div className={s.img}>
                <img src={props.img} alt="news"/>
            </div>
            <div className={s.time}>
                {props.created_at}
            </div>
        </NavLink>
    )
}

export default NewsItemSmall

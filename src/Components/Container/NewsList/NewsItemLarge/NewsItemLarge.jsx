import React from "react";
import s from './NewsItemLarge.module.scss'
import image from '../../../../assets/images/unnamed (1).jpg'
import {NavLink} from "react-router-dom";

const NewsItemLarge = (props) => {
    return (
        <NavLink to={`/current_news/${props.id}`} className={s.news}>
            <div className={s.top}>
                <h5 className={s.title}>
                    {props.title}
                </h5>
                <div className={s.time}>
                    {props.created_at}
                </div>
            </div>
            <div className={s.img}>
                {/*<img src={props.img} alt="news"/>*/}
                <img src={image} alt="news"/>
            </div>
            <div className={s.description}>
                {props.short_description}
            </div>
        </NavLink>
    )
}

export default NewsItemLarge

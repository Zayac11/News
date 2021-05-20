import React from "react";
import s from './NewsItemSmall.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"
import view from "../../../../assets/images/view.svg";

const NewsItemSmall = (props) => {
    return (
        <motion.div variants={props.animationItem}>
            <NavLink to={`/current_news/${props.id}`} className={s.news}>
                    <h5 className={s.title}>
                        {props.title}
                    </h5>
                    <div className={s.content}>
                        <div className={s.img}>
                            <img src={props.img} alt="news"/>
                        </div>
                        <div className={s.time}>
                            <span>{props.created_at}</span>
                            <span className={s.view}><img className={s.viewImg} src={view} alt="view_eye"/> <span className={s.viewCount}>{props.view_counter}</span></span>
                        </div>
                    </div>
            </NavLink>
        </motion.div>
    )
}

export default NewsItemSmall

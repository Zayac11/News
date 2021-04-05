import React from "react";
import s from './NewsItemSmall.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"

const NewsItemSmall = (props) => {
    return (
        <motion.div variants={props.animationItem}>
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
        </motion.div>
    )
}

export default NewsItemSmall

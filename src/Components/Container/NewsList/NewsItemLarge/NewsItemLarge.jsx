import React from "react";
import s from './NewsItemLarge.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"

const NewsItemLarge = (props) => {
    return (
        <motion.div variants={props.animationItem}>
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
                        <img src={props.img} alt="news"/>
                    </div>
                    <div className={s.description}>
                        {props.short_description}
                    </div>
            </NavLink>
        </motion.div>
    )
}

export default NewsItemLarge

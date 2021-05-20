import React from "react";
import s from './NewsItemLarge.module.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"
import view from './../../../../assets/images/view.svg'

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
                    <div className={s.footer}>
                        <div className={s.timePhone}>
                            {props.created_at}
                        </div>
                        <span className={s.vision}>
                            <img className={s.viewImg} src={view} alt="view_eye"/> <span className={s.viewCount}>{props.view_counter}</span>
                        </span>
                    </div>
            </NavLink>
        </motion.div>
    )
}

export default NewsItemLarge

import React from 'react'
import {compose} from "redux";
import s from './NewsList.module.scss'
import {withRequestFetching} from "../../../hoc/withRequestFetching";
import NewsItemLarge from "./NewsItemLarge/NewsItemLarge";
import NewsItemSmall from "./NewsItemSmall/NewsItemSmall";
import Paginator from "../../../Common/Paginator/Paginator";
import SwitchNews from "../../../Common/Switch/Switch";
import {motion} from "framer-motion"
import {MainContentLoaderLarge, MainContentLoaderSmall} from "../../../Common/ContentLoader/ContendLoader";

//Общая компонента с выводом карточек новостей
const NewsList = (props) => {
    return (
        <div className={s.newsList}>
            <div className={s.top}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.toggle}>
                   <span>Отображение</span><SwitchNews handleCheck={props.handleCheck} checked={props.checked} />
                </div>
            </div>

            {
                props.isFetch
                    ?
                        props.checked ? <MainContentLoaderLarge />
                                      : <MainContentLoaderSmall />
                    :
                    <>
                        <div className={s.content}>
                            {
                                props.newsCards &&
                                props.newsCards.length > 0 ?
                                    (
                                        !props.checked ?
                                            <motion.div className={s.largeContainer}
                                                        variants={props.animationContainer}
                                                        initial="hidden"
                                                        animate="visible"
                                            >
                                                {props.newsCards.map(n => {
                                                    return (
                                                        <NewsItemLarge animationItem={props.animationItem} key={n.id} {...n} />
                                                    )
                                                })}
                                            </motion.div>

                                            : <motion.div className={s.smallContainer}
                                                          variants={props.animationContainer}
                                                          initial="hidden"
                                                          animate="visible"
                                            >
                                                {props.newsCards.map(n => {
                                                    return (
                                                        <NewsItemSmall animationItem={props.animationItem} key={n.id} {...n} />
                                                    )
                                                })}
                                            </motion.div>
                                    )
                                    :
                                    <div className={'newsEmpty'}>
                                        Новостей пока нет
                                    </div>
                            }
                        </div>

                        <Paginator totalItemsCount={props.count}
                                   pageSize={props.pageSize}
                                   currentPage={props.currentPage}
                                   onPageChanged={props.onPageChanged} />
                    </>
            }


        </div>
    )
}

export default compose(
    // withRequestFetching
)(NewsList)

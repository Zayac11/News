import React from 'react'
import {compose} from "redux";
import s from './NewsList.module.scss'
import {withRequestFetching} from "../../hoc/withRequestFetching";
import NewsItemLarge from "./NewsItemLarge/NewsItemLarge";
import NewsItemSmall from "./NewsItemSmall/NewsItemSmall";
import Paginator from "../../Common/Paginator/Paginator";

//Общая компонента с выводом карточек новостей
const NewsList = (props) => {
    return (
        <div className={s.newsList}>
            <div className={s.top}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.toggle}>
                    toggle
                </div>
            </div>

            <div className={s.content}>
                {
                    props.newsCards &&
                        props.newsCards.length > 0 ?
                        (
                            props.newsStructure === 'large'?
                                <div className={s.largeContainer}>
                                    {props.newsCards.map(n => {
                                        return (
                                            <NewsItemLarge key={n.id} {...n} />
                                        )
                                    })}
                                </div>

                            : props.newsStructure === 'small' &&
                                <div className={s.smallContainer}>
                                    {props.newsCards.map(n => {
                                        return (
                                            <NewsItemSmall key={n.id} {...n} />
                                        )
                                    })}
                                </div>
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

        </div>
    )
}

export default compose(
    withRequestFetching,
)(NewsList)

import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentNews} from "../../../redux/news-reducer";
import NewsForm from "./NewsForm";
import {MainContentLoaderNews} from "../../../Common/ContentLoader/ContendLoader";

const NewsContainer = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth);
    const newsData = useSelector(state => state.news.newsData);

    useEffect(() => {
        dispatch(getCurrentNews(props.match.params.newsId))
    }, [dispatch, props.match.params.newsId]);
    if(!newsData.content) {
        return <MainContentLoaderNews />
    }

    const animations = {
        hidden: {
            opacity: 0,
            x: -100,
            y: 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0
        }
    }

    return (
        <NewsForm animations={animations} isAuth={isAuth} newsData={newsData} />
    )
}

export default compose(
    withRouter,
)(NewsContainer)


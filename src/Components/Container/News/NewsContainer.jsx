import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentNews} from "../../../redux/news-reducer";
import NewsForm from "./NewsForm";
import Preloader from "../../../Common/Preloader/Preloader";

const NewsContainer = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth);
    const newsData = useSelector(state => state.news.newsData);

    useEffect(() => {
        dispatch(getCurrentNews(props.match.params.newsId))
    }, [dispatch, props.match.params.newsId]);
    if(!newsData.content) {
        return <Preloader />
    }
    return (
        <NewsForm isAuth={isAuth} newsData={newsData} />
    )
}

export default compose(
    withRouter,
)(NewsContainer)


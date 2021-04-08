import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentNews, deleteNewsData, deleteNews, setIsNewsCreated} from "../../../redux/news-reducer";
import NewsForm from "./NewsForm";
import {MainContentLoaderNews} from "../../../Common/ContentLoader/ContendLoader";
import {toast} from "react-toastify";

const NewsContainer = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth);
    const newsData = useSelector(state => state.news.newsData);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const isNewsDeleted = useSelector(state => state.news.isNewsDeleted);
    const notifyDelete = () => toast.error("Новость успешно удалена");

    useEffect(() => {
        dispatch(getCurrentNews(props.match.params.newsId))
    }, [dispatch, props.match.params.newsId]);

    useEffect(() => {
        return () => {
            dispatch(deleteNewsData())
            dispatch(setIsNewsCreated(false))
        };
    }, [dispatch]);

    useEffect(() => {
        if(isNewsDeleted) {
            notifyDelete()
        }

    }, [isNewsDeleted]);

    if(!newsData.content) {
        return <MainContentLoaderNews />
    }

    const handleDelete = () => {
        setIsModalOpen(false)
        dispatch(deleteNews(props.match.params.newsId))
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

    if(isNewsDeleted) {
        return <Redirect to={'/'} />
    }

    return (
        <NewsForm handleDelete={handleDelete} animations={animations} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isAuth={isAuth} newsData={newsData} />
    )
}

export default compose(
    withRouter,
)(NewsContainer)


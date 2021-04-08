import React, {useEffect, useState} from 'react'
import UpdateNewsForm from "./UpdateNewsForm";
import {useDispatch, useSelector} from "react-redux";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {
    deleteNewsData,
    getCurrentNews,
    setIsNewsCreated,
    updateNews
} from "../../../redux/news-reducer";
import Preloader from "../../../Common/Preloader/Preloader";
import {toast} from "react-toastify";

const UpdateNewsContainer = (props) => {

    const dispatch = useDispatch()
    let newsId = props.match.params.newsId
    const newsData = useSelector(state => state.news.newsData);
    const isNewsCreated = useSelector(state => state.news.isNewsCreated);
    const [contentState, setContentState] = useState('')
    const [editorState, setEditorState] = useState('')
    const notifyUpdate = () => toast.success("Новость успешно изменена");

    useEffect(() => {
        dispatch(getCurrentNews(props.match.params.newsId))
    }, [dispatch, props.match.params.newsId]);

    //ComponentWillUnmount function
    useEffect(() => {
       return () => {
           dispatch(setIsNewsCreated(false))
           dispatch(deleteNewsData())
        };
    }, [dispatch]);
    useEffect(() => {
        if(isNewsCreated) {
            notifyUpdate()
        }
    }, [isNewsCreated]);

    if(!newsData.content) {
        return <Preloader />
    }

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(contentState)
        dispatch(updateNews(newsId, values.name, values.img, values.description, contentState, values.section, actions.setSubmitting))
    }

    if(isNewsCreated) {
        return <Redirect to={'/'} />
    }

    return (
        <UpdateNewsForm newsData={newsData} onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withRouter,
    withAuthRedirect,
)(UpdateNewsContainer)

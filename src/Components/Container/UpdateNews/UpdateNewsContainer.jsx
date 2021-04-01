import React, {useEffect, useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import UpdateNewsForm from "./UpdateNewsForm";
import {useDispatch, useSelector} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {getCurrentNews, updateNews} from "../../../redux/news-reducer";
import Preloader from "../../../Common/Preloader/Preloader";

const UpdateNewsContainer = (props) => {

    const dispatch = useDispatch()
    let newsId = props.match.params.newsId
    const newsData = useSelector(state => state.news.newsData);
    // let content = newsData.content
    const [contentState, setContentState] = useState('')
    const [editorState, setEditorState] = useState('')

    useEffect(() => {
        dispatch(getCurrentNews(props.match.params.newsId))
    }, [dispatch, props.match.params.newsId]);

    if(!newsData.content) {
        return <Preloader />
    }

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(contentState)
        dispatch(updateNews(newsId, values.name, values.img, values.description, contentState, values.section, actions.setSubmitting))
    }

    return (
        <UpdateNewsForm newsData={newsData} onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withRouter,
    withAuthRedirect,
)(UpdateNewsContainer)

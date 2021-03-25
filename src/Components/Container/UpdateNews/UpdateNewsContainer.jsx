import React, {useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import UpdateNewsForm from "./UpdateNewsForm";
import {useDispatch, useSelector} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {updateNews} from "../../../redux/news-reducer";

const UpdateNewsContainer = (props) => {
    const dispatch = useDispatch()
    let newsId = props.match.params.newsId
    const newsData = useSelector(state => state.news.newsData);
    let content = newsData.content.call
    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(content)))

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(contentState)
        console.log(editorState)
        dispatch(updateNews(newsId, values.name, values.img, values.description, editorState, values.section, actions.setSubmitting))
    }

    return (
        <UpdateNewsForm newsData={newsData} onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withRouter,
    withAuthRedirect,
)(UpdateNewsContainer)

import React, {useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import UpdateNewsForm from "./UpdateNewsForm";
import {useSelector} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const UpdateNewsContainer = (props) => {

    let newsId = props.match.params.newsId
    const newsData = useSelector(state => state.news.newsData);
    let content = newsData.content.call
    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(content)))

    const onSubmit = (values) => {
        console.log(values)
        console.log(contentState)
        console.log(editorState)
    }

    return (
        <UpdateNewsForm newsData={newsData} onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withRouter,
)(UpdateNewsContainer)

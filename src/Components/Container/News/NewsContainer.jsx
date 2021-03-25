import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import News from "./News";
import {convertFromRaw, EditorState} from "draft-js";

const NewsContainer = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth);
    const newsData = useSelector(state => state.news.newsData);
    let content = newsData.content.call
    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(content)))

    return (
        <News isAuth={isAuth} editorState={editorState} contentState={contentState} newsData={newsData} match={props.match} />
    )
}

export default compose(
    withRouter,
)(NewsContainer)


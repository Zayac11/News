import React, {useEffect, useState} from 'react'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import News from "./News";
import {convertFromRaw, EditorState} from "draft-js";
import {withRequestFetching} from "../../../hoc/withRequestFetching";

const NewsForm = (props) => {

    let content = props.newsData.content

    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(content)))

    useEffect(()=> {
        setContentState(props.newsData.content)
        setEditorState(EditorState.createWithContent(convertFromRaw(props.newsData.content)))
    },[props.newsData.content])

    return (
        <News {...props} editorState={editorState} contentState={contentState} match={props.match} />
    )
}

export default compose(
    withRouter,
)(NewsForm)


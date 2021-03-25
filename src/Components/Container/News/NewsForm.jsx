import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import News from "./News";
import {convertFromRaw, EditorState} from "draft-js";
import {getCurrentNews} from "../../../redux/news-reducer";
import {withRequestFetching} from "../../../hoc/withRequestFetching";

const NewsForm = (props) => {
    debugger
    let content = props.newsData.content

    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(content)))

    return (
        <News {...props} editorState={editorState} contentState={contentState} match={props.match} />
    )
}

export default compose(
    withRouter,
    withRequestFetching,
)(NewsForm)


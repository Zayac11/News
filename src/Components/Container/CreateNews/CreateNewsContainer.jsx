import React, {useEffect, useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import CreateNewsForm from "./CreateNewsForm";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {createNews, setIsNewsCreated} from "../../../redux/news-reducer";
import {Redirect} from "react-router-dom";

const CreateNewsContainer = (props) => {
    const dispatch = useDispatch()
    const content = {
        "entityMap":{

        },
        "blocks":[
            {
                "key":"637gr",
                "text":"",
                "type":"unstyled",
                "depth":0,
                "inlineStyleRanges":[

                ],
                "entityRanges":[

                ],
                "data":{

                }
            }
        ]
    };

    const isNewsCreated = useSelector(state => state.news.isNewsCreated);
    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState( EditorState.createWithContent(convertFromRaw(content)))

    //ComponentWillUnmount function
    useEffect(() => {
        return function cleanup() {
            dispatch(setIsNewsCreated(false))
        };
    });

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(contentState)
        console.log(editorState)
        dispatch(createNews(values.name, values.img, values.description, contentState, values.section, actions.setSubmitting))
    }

    if(isNewsCreated) {
        return <Redirect to={'/'} />
    }

    return (
        <CreateNewsForm onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withAuthRedirect,
)(CreateNewsContainer)

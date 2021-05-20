import React, {useEffect, useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import CreateNewsForm from "./CreateNewsForm";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {createNews, setIsNewsCreated} from "../../../redux/news-reducer";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import {isDesktop} from 'react-device-detect'

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
    const notify = () => toast.success("Новость успешно создана");

    //ComponentWillUnmount function
    useEffect(() => {
        return () => {
            dispatch(setIsNewsCreated(false))
        };
    }, [dispatch]);
    useEffect(() => {
        if(isNewsCreated) {
            notify()
        }

    }, [isNewsCreated]);

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(contentState)
        console.log(editorState)
        dispatch(createNews(values.name, values.img, values.description, contentState, values.section, values.isPinned, actions.setSubmitting))
    }

    if(isNewsCreated) {
        return <Redirect to={'/'} />
    }
    if(!isDesktop) {
        return <Redirect to={'/'} />
    }

    return (
        <CreateNewsForm onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withAuthRedirect,
)(CreateNewsContainer)

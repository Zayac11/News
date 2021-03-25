import React, {useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import CreateNewsForm from "./CreateNewsForm";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {useDispatch} from "react-redux";
import {createNews} from "../../../redux/news-reducer";

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

    const [contentState, setContentState] = useState(content)
    const [editorState, setEditorState] = useState( EditorState.createWithContent(convertFromRaw(content)))

    const onSubmit = (values) => {
        console.log(values)
        console.log(contentState)
        console.log(editorState)
        dispatch(createNews(values.name, values.img, values.description, editorState, values.section))
    }

    return (
        <CreateNewsForm onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default compose(
    withAuthRedirect,
)(CreateNewsContainer)

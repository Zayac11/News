import React, {useState} from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import CreateNewsForm from "./CreateNewsForm";

const CreateNewsContainer = (props) => {

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
    }

    return (
        <CreateNewsForm onSubmit={onSubmit} setContentState={setContentState} setEditorState={setEditorState} contentState={contentState} editorState={editorState} />
    )
}

export default CreateNewsContainer

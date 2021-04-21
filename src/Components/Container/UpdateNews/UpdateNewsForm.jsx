import React, {useEffect} from "react"
import {compose} from "redux";
import * as Yup from "yup";
import CreateNews from "../CreateNews/CreateNews";
import {withRequestFetching} from "../../../hoc/withRequestFetching";
import {convertFromRaw, EditorState} from "draft-js";

const UpdateNewsForm = ({newsData, ...props}) => {

    const initialValues = {
        name: newsData.title, // Название статьи
        description: newsData.short_description, // Краткое описание статьи
        img: newsData.img, // Превью статьи
        section: newsData.category, // Раздел статьи
        isPinned: newsData.is_pinned, // Закрепленная новость

    }

    useEffect(() => {
        props.setContentState(newsData.content)
        props.setEditorState(EditorState.createWithContent(convertFromRaw(newsData.content)))
    }, [newsData.content]); // Перезапускать эффект только если count поменялся

    let validationSchema = Yup.object({
        name: Yup.string()
            .required('Пожалуйста, заполните поле'),
        description: Yup.string()
            .required('Пожалуйста, заполните поле'),
        img: Yup.string()
            .required('Пожалуйста, добавьте картинку'),
        section: Yup.string()
            .required('Пожалуйста, выберите раздел'),
    })

    return (
        <CreateNews {...props} onSubmit={props.onSubmit} isUpdate={true} validationSchema={validationSchema} initialValues={initialValues} />
    )
}

export default compose(
    withRequestFetching,
)(UpdateNewsForm)

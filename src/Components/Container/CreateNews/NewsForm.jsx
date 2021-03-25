import React from "react"
import {compose} from "redux";
import * as Yup from "yup";
import CreateNews from "./CreateNews";

const NewsForm = (props) => {

    const initialValues = {
        name: '', // Название статьи
        description: '', // Краткое описание статьи
        img: '', // Превью статьи
        section: 'sport', // Раздел статьи

    }

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
        <CreateNews onSubmit={props.onSubmit} validationSchema={validationSchema} initialValues={initialValues} />
    )
}

export default compose(

)(NewsForm)

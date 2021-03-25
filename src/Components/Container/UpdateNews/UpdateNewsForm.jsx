import React, {useEffect} from "react"
import {compose} from "redux";
import * as Yup from "yup";
import CreateNews from "../CreateNews/CreateNews";
import {withRequestFetching} from "../../../hoc/withRequestFetching";

const NewsForm = ({newsData, ...props}) => {

    const initialValues = {
        name: newsData.title, // Название статьи
        description: newsData.short_description, // Краткое описание статьи
        img: newsData.img, // Превью статьи
        section: newsData.category, // Раздел статьи
    }

    // const newsData = useSelector(state => state.news.newsData);
    // useEffect(() => {
    //    initialValues.name = newsData.title
    //    initialValues.description = newsData.short_description
    //    initialValues.img = newsData.img
    //    initialValues.section = newsData.category
    // }, [newsData.title, newsData.short_description, newsData.img, newsData.category]); // Перезапускать эффект только если count поменялся

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
        <CreateNews {...props} onSubmit={props.onSubmit} validationSchema={validationSchema} initialValues={initialValues} />
    )
}

export default compose(
    withRequestFetching,
)(NewsForm)

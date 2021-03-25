import React from "react"
import {compose} from "redux";
import * as Yup from "yup";
import Login from "./Login";

const LoginForm = (props) => {

    const initialValues = {
        username: '', // Логин
        password: '', // Пароль

    }

    let validationSchema = Yup.object({
        username: Yup.string()
            .required('Пожалуйста, заполните поле'),
        password: Yup.string()
            .required('Пожалуйста, заполните поле'),
    })

    return (
        <Login onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}/>
    )
}

export default compose(

)(LoginForm)

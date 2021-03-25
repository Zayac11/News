import React, {useEffect, useState} from "react"
import {compose} from "redux";
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../redux/auth-reducer";
import {login} from "../../redux/auth-reducer";

const LoginContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsAuth(false))
    },);

    const onSubmit = (values) => {
        dispatch(login(values.username, values.password))
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default compose(
)(LoginContainer)

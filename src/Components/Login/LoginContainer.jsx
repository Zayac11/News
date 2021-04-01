import React from "react"
import {compose} from "redux";
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginContainer = (props) => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.auth.isAuth)

    const onSubmit = (values, actions) => {
        dispatch(login(values.username, values.password, actions.setSubmitting))
    }

    if(isAuth) {
        return <Redirect to={'/'} />
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default compose(
)(LoginContainer)

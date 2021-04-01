import React from "react"
import {compose} from "redux";
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";

const LoginContainer = (props) => {

    const dispatch = useDispatch()

    const onSubmit = (values, actions) => {
        dispatch(login(values.username, values.password, actions.setSubmitting))
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default compose(
)(LoginContainer)

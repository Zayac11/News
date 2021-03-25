import React, {useEffect} from "react"
import {compose} from "redux";
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {login} from "../../redux/auth-reducer";

const LoginContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    },);

    const onSubmit = (values, actions) => {
        dispatch(login(values.username, values.password, actions.setSubmitting))
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default compose(
)(LoginContainer)

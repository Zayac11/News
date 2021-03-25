import React from "react"
import {compose} from "redux";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import s from './Login.module.scss'
import NavbarContainer from "../Container/Navbar/NavbarContainer";
import LoginInput from "../../Common/LoginInput/LoginInput";
import TextError from "../../Common/TextError/TextError";

const Login = (props) => {


    return (
        <div className={'outer'}>
            <NavbarContainer />
            <div className={s.login}>
                <Formik initialValues={props.initialValues}
                         validationSchema={props.validationSchema}
                         onSubmit={props.onSubmit}
                >
                    {
                        ({ isSubmitting, values }) => (
                            <Form>
                                <div className={s.section}>
                                    <label className={s.label} htmlFor="username">E-mail</label>
                                    <Field
                                        id="username"
                                        type="text"
                                        name="username"
                                        component={LoginInput}
                                    />
                                    <ErrorMessage name="username" component={TextError} />
                                </div>
                                <div className={s.section}>
                                    <label className={s.label} htmlFor="password">Password</label>
                                    <Field
                                        id="password"
                                        type="password"
                                        name="password"
                                        component={LoginInput}
                                    />
                                    <ErrorMessage name="password" component={TextError} />
                                </div>
                                <button className={s.submitBtn} type="submit" disabled={isSubmitting}>Войти</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default compose(

)(Login)

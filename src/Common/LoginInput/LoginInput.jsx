import React from 'react'
import s from './LoginInput.module.scss'

const LoginInput = (props) => {

    return (
        <div>
            <input className={s.input} id={props.id} {...props.field} type={props.type}/>
        </div>
    )
}

export default LoginInput

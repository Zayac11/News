import React from "react";
import s from './TextError.module.scss'

const TextError = (props) => {
    return (
        <div className={s.error}>
            {props.children}
        </div>
    )
}

export default TextError

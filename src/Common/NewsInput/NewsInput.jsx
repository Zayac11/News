import React from 'react'
import s from './NewsInput.module.scss'

const NewsInput = (props) => {

    return (
        <div>
            <input className={s.input} id={props.id} {...props.field} type={props.type}/>
        </div>
    )
}

export default NewsInput

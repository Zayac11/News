import React from 'react'
import s from './DeleteModal.module.scss'

const DeleteModal = (props) => {
    return (
        <div className={s.modal}>
            <h2 className={s.title}>Подтвердите удаление</h2>
            <div>
                <button className={s.deleteBtn} onClick={props.handleDelete}>Удалить</button>
            </div>
        </div>
    )
}

export default DeleteModal

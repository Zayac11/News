import React from 'react'
import {compose} from "redux";
import {Editor} from "react-draft-wysiwyg";
import s from './News.module.scss'
import {NavLink} from "react-router-dom";
import Modal from "react-png-modal";
import DeleteModal from "../../../Common/DeleteModal/DeleteModal";
import view from "../../../assets/images/view.svg";

const News = ({newsData, ...props}) => {
    return (
        <>
            <div className={s.news}>
                <div className={s.top}>
                    <h2 className={s.title}>{newsData.title}</h2>
                    <div className={s.time}>{newsData.created_at}</div>
                </div>

                <div className={s.vision}>
                    <img className={s.viewImg} src={view} alt="view_eye"/> <span className={s.viewCount}>{newsData.view_counter}</span>
                </div>

                <Editor
                    editorState={props.editorState}
                    readOnly = {true}
                    toolbarHidden = {true}
                    onContentStateChange={props.setContentState}
                    onEditorStateChange={props.setEditorState}
                />

                {
                    props.isAuth &&
                    <>
                        <div className={s.footer}>
                            <NavLink className={s.updateBtn} to={`/create_news/${newsData.id}`}>
                                Редактировать
                            </NavLink>
                            <button onClick={() => props.setIsModalOpen(true)} className={s.deleteBtn}>
                                Удалить
                            </button>
                        </div>
                    </>
                }
            </div>
            <Modal
                closeModal={() => props.setIsModalOpen(false)}
                open={props.isModalOpen}
                center
            >
                <DeleteModal handleDelete={props.handleDelete} />
            </Modal>
        </>
    )
}

export default compose(

)(News)


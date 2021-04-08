import React from 'react'
import {compose} from "redux";
import { motion } from "framer-motion"
import {Editor} from "react-draft-wysiwyg";
import s from './News.module.scss'
import {NavLink} from "react-router-dom";
import Modal from "react-png-modal";
import DeleteModal from "../../../Common/DeleteModal/DeleteModal";

const News = ({newsData, ...props}) => {
    return (
        <>
            <motion.div className={s.news}
                        variants={props.animations} initial="hidden" animate="visible"
            >
                <div className={s.top}>
                    <h2 className={s.title}>{newsData.title}</h2>
                    <div className={s.time}>{newsData.created_at}</div>
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
            </motion.div>
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


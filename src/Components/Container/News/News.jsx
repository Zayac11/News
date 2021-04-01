import React from 'react'
import {compose} from "redux";
import {withRequestFetching} from "../../../hoc/withRequestFetching";
import {Editor} from "react-draft-wysiwyg";
import s from './News.module.scss'
import {NavLink} from "react-router-dom";

const News = ({newsData, ...props}) => {
    return (
        <div className={s.news}>
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
                <div className={s.footer}>
                    <NavLink className={s.updateBtn} to={`/create_news/${newsData.id}`}>
                        Редактировать
                    </NavLink>
                </div>
            }
        </div>
    )
}

export default compose(
    withRequestFetching,
)(News)


import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextError from "../../../Common/TextError/TextError";
import NewsInput from "../../../Common/NewsInput/NewsInput";
import s from './CreateNews.module.scss'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CreateNews = (props) => {

    return (
        <div className={s.create}>
            <h2 className={s.title}>Создание статьи</h2>
            <Formik initialValues={props.initialValues}
                    validationSchema={props.validationSchema}
                    onSubmit={props.onSubmit}
                    enableReinitialize
            >
                {
                    ({ isSubmitting, setFieldValue, values }) => (
                        <Form>
                            <div className={s.section}>
                                <label className={s.label} htmlFor="name">Название</label>
                                <Field
                                    id="name"
                                    type="text"
                                    name="name"
                                    component={NewsInput}
                                />
                                <ErrorMessage name="name" component={TextError} />
                            </div>
                            <div className={s.section}>
                                <label className={s.label} htmlFor="description">Краткое описание</label>
                                <Field
                                    id="description"
                                    type="text"
                                    name="description"
                                    component={NewsInput} //textarea
                                />
                                <ErrorMessage name="description" component={TextError} />
                            </div>

                            <Editor
                                editorState={props.editorState}
                                readOnly = {false}
                                toolbarHidden = {false}
                                onContentStateChange={props.setContentState}
                                onEditorStateChange={props.setEditorState}
                            />

                            <div className={`${s.section} ${s.top}`}>
                                <label className={s.label}  htmlFor="section">Выберите раздел</label>
                                <Field
                                    className={s.select}
                                    component="select"
                                    id="section"
                                    name="section"
                                >
                                    <option value="Спорт">Спорт</option>
                                    <option value="Мир">Мир</option>
                                    <option value="Интернет">Интернет</option>
                                    <option value="Политика">Политика</option>
                                    <option value="Экономика">Экономика</option>
                                    <option value="Культура">Культура</option>
                                    <option value="Наука">Наука</option>
                                </Field>
                            </div>
                            {
                                props.isUpdate &&
                                <div className={s.section}>
                                    <label className={`${s.label} ${s.checkbox}`} htmlFor="isPinned">
                                        <span>Закрепить</span>
                                        <Field
                                            id="isPinned"
                                            type="checkbox"
                                            name="isPinned"
                                        />
                                    </label>
                                </div>
                            }

                            <div className={s.footer}>
                                <div>
                                    <Field
                                        id="img"
                                        type="file"
                                        name="img"
                                        component={
                                            () =>
                                                <>
                                                    <input className={s.inputFile} id="img" accept="image/*" name="img" type="file" onChange={(event) => {
                                                        setFieldValue("img", event.currentTarget.files[0]);
                                                    }} />
                                                    {
                                                        values.img.name
                                                        ?
                                                            <label htmlFor="img">{values.img.name}</label>
                                                        :
                                                            values.img !== ''
                                                            ? <label htmlFor="img">Обновить превью статьи</label>
                                                            : <label htmlFor="img">Загрузить превью статьи</label>
                                                    }
                                                </>
                                        }
                                    />
                                    <ErrorMessage name="img" component={TextError} />
                                </div>
                                {
                                    props.isUpdate
                                    ? <button className={s.submitBtn} type="submit" disabled={isSubmitting}>Обновить</button>
                                    : <button className={s.submitBtn} type="submit" disabled={isSubmitting}>Создать</button>
                                }
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default CreateNews

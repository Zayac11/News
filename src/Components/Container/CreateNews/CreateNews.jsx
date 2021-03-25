import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import TextError from "../../../Common/TextError/TextError";
import NewsInput from "../../../Common/NewsInput/NewsInput";
import s from './CreateNews.module.scss'

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

                            {/*Содержание*/}

                            <div className={s.section}>
                                <label className={s.label}  htmlFor="section">Выберите раздел</label>
                                <Field
                                    className={s.select}
                                    component="select"
                                    id="section"
                                    name="section"
                                >
                                    <option value="sport">Спорт</option>
                                    <option value="world">Мир</option>
                                    <option value="internet">Интернет</option>
                                    <option value="politics">Политика</option>
                                    <option value="economic">Экономика</option>
                                    <option value="culture">Культура</option>
                                    <option value="science">Наука</option>
                                </Field>
                            </div>

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
                                                            <label htmlFor="img">Загрузить превью статьи</label>
                                                    }
                                                </>
                                        }
                                    />
                                    <ErrorMessage name="img" component={TextError} />
                                </div>
                                <button className={s.submitBtn} type="submit" disabled={isSubmitting}>Создать</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default CreateNews

import React from 'react'
import {compose} from "redux";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.navbarContainer}>
            <div className={'container'}>
                <div className={s.navbar}>
                    <div className={s.nameContainer}>
                        <NavLink to={'/'} className={s.name}>
                            News Agency
                        </NavLink>
                        {
                            props.isAuth &&
                            <div className={s.admin}>
                                Администратор
                            </div>
                        }
                    </div>
                    <div className={s.info}>
                        {
                            props.isAuth &&
                            <NavLink to={'/create_news'} className={s.createBtn}>
                                Создать статью
                            </NavLink>
                        }
                        <div className={s.searchContainer}>
                            <div className={s.inputContainer}>
                                <input type="text" onKeyUp={props.handleKeyUp} value={props.letters} onChange={ (e) => props.handleChangeLetters(e.target.value)} placeholder={'Поиск'} className={s.input}/>
                            </div>
                            <div className={s.time}>
                                {props.time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose()(Navbar)

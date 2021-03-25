import React from 'react'
import {compose} from "redux";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.navbarContainer}>
            <div className={'container'}>
                <div className={s.navbar}>
                    <NavLink to={'/'} className={s.name}>
                        News Agency
                    </NavLink>
                    <div className={s.info}>
                        {/*<div className={s.section}>*/}
                        {/*    {props.section}*/}
                        {/*</div>*/}
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

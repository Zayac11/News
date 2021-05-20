import React from 'react'
import {compose} from "redux";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import SlidingPanel from 'react-sliding-side-panel'
import SidePanel from './SidePanel/SidePanel'

const Navbar = (props) => {
    return (
        <div className={s.navbarContainer}>
            <div className={'container'}>
                <div className={s.navbar}>
                    <div className={s.nameContainer}>
                        <div className={s.sidePanel}>
                            <button onClick={() => props.setOpenPanel(true)}>Open</button>
                            <SlidingPanel
                                type={'left'}
                                isOpen={props.openPanel}
                                size={30}
                                backdropClicked ={() => props.setOpenPanel(false)}
                            >
                                <SidePanel openPanel={props.openPanel} setOpenPanel={props.setOpenPanel} />
                            </SlidingPanel>
                        </div>
                        <div>
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
                    </div>
                    <div className={s.info}>
                        {
                            props.isAuth &&
                            <NavLink to={'/create_news'} className={s.createBtn}>
                                Создать статью
                            </NavLink>
                        }
                        <div className={s.searchContainer}>
                            {
                                props.isAuth &&
                                <button onClick={() => {props.handleLogout()}} className={s.logoutBtn}>Выйти</button>
                            }

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

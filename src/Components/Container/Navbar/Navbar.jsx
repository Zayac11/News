import React from 'react'
import {compose} from "redux";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import SlidingPanel from 'react-sliding-side-panel'
import SidePanel from './SidePanel/SidePanel'
import search from '../../../assets/images/search.svg'

const Navbar = (props) => {
    return (
        <div className={s.navbarContainer}>
            <div className={'container'}>
                <div className={s.navbar}>
                    <div className={s.nameContainer}>
                        <div className={s.sidePanel}>
                            <img className={s.menu} onClick={() => props.setOpenPanel(true)} src="https://img.icons8.com/android/25/ffffff/menu.png" alt='menu'/>
                            <SlidingPanel
                                type={'left'}
                                isOpen={props.openPanel}
                                size={45}
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
                                <input id='search' type="text" onKeyUp={props.handleKeyUp} value={props.letters} onChange={ (e) => props.handleChangeLetters(e.target.value)} placeholder={'Поиск'} className={s.input}/>
                                <label className={s.searchIcon} htmlFor='search'>
                                    <img src={search} onClick={props.handleSubmit} alt='search' />
                                </label>
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

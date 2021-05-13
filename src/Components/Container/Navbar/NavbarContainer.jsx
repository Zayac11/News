import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import Navbar from "./Navbar";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redux/auth-reducer";
import {getCurrentSection} from "../../../Common/getCurrentSection";

const NavbarContainer = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth);
    const {time} = useDate()
    const url = new URLSearchParams(props.location.search)
    let initialLetters = url.get('letters');
    const [letters, handleChangeLetters] = useState(initialLetters || '')
    const [currentSection, setCurrentSection] = useState('')

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    const handleLogout = (e) => {
        dispatch(logout())
    }

    const handleSubmit = () => {
        if(letters === '')props.history.push(`/search`)
        else props.history.push(`/search?letters=${letters}`)
    }

    useEffect(() => {
        setCurrentSection(getCurrentSection(props.section))
    }, [props.section]);

    return (
        <Navbar handleLogout={handleLogout} isAuth={isAuth} letters={letters} section={currentSection} handleKeyUp={handleKeyUp} handleChangeLetters={handleChangeLetters} time={time} match={props.match} />
    )
}

export default compose(
    withRouter,
)(NavbarContainer)


export const useDate = () => {
    const locale = 'ru'
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });

    return {
        time
    };
};

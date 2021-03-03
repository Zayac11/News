import React, {useState, useEffect} from 'react'
import {compose} from "redux";
import Navbar from "./Navbar";
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getNews} from "../../redux/news-reducer";

const NavbarContainer = (props) => {

    const dispatch = useDispatch()
    const {time} = useDate()
    const [letters, handleChangeLetters] = useState('')
    const [currentSection, setCurrentSection] = useState('')

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    useEffect(() => {
        setCurrentSection(getCurrentSection(props.section))
    }, [props.section]);

    const handleSubmit = () => {
        dispatch(getNews(letters))
    }

    return (
        <Navbar letters={letters} section={currentSection} handleKeyUp={handleKeyUp} handleChangeLetters={handleChangeLetters} time={time} match={props.match} />
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

export const getCurrentSection = (section) => {

    switch (section) {
        case 'sport': {
            return 'Спорт'
        }
        case 'world': {
            return 'Мир'
        }
        case 'internet': {
            return 'Интернет'
        }
        case 'politics': {
            return 'Политика'
        }
        case 'economic': {
            return 'Экономика'
        }
        case 'culture': {
            return 'Культура'
        }
        case 'science': {
            return 'Наука'
        }
        default: {
            return 'Главная'
        }
    }
};

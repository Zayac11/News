import React, {useEffect, useState} from "react";
import {compose} from "redux";
import NewsList from "./NewsList";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNewsCategory, getRecentNews} from "../../../redux/news-reducer";
import {getCurrentSection} from "../../../Common/getCurrentSection";

const NewsListContainer = (props) => {
    const [checked, setChecked] = useState(localStorage.getItem('checked') === 'true')
    const [isPopular, setIsPopular] = useState(localStorage.getItem('is_popular') === 'true')
    const dispatch = useDispatch()

    const newsCards = useSelector(state => state.news.newsCards);
    const count = useSelector(state => state.news.count);
    const pageSize = useSelector(state => state.news.pageSize);
    const currentPage = useSelector(state => state.news.currentPage);
    const isFetch = useSelector(state => state.auth.isFetch);

    useEffect(() => {
        props.setSection(props.match.params.section ? props.match.params.section  : 'Главная')
        if(props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), 1))
        }
        else {
            dispatch(getRecentNews('', 1, isPopular))
        }
    }, [props.match.params.section]);

    const onPageChanged = (pageNumber) => { // Поиск по новой странице + изменение текущей
        if(props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), pageNumber))
        }
        else {
            dispatch(getRecentNews('', pageNumber, isPopular))
        }
    }

    const handleCheck = (checked) => {
        setChecked(checked)
        localStorage.setItem('checked', checked);
    }
    const handleCheckPopular = (checked) => {
        setIsPopular(checked)
        localStorage.setItem('is_popular', checked);
        dispatch(getRecentNews('', 1, checked))
    }

    const animationContainer = {
        hidden: {opacity: 1, scale: 1},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }
    const animationItem = {
        hidden: {x: -100, y: 20, opacity: 0},
        visible: {
            x: 0,
            y: 0,
            opacity: 1
        }
    }

    return (
        <NewsList animationContainer={animationContainer} isFetch={isFetch} animationItem={animationItem} title={'Новости'} count={count} pageSize={pageSize} currentPage={currentPage}
                  checked={checked} handleCheck={handleCheck} handleCheckPopular={handleCheckPopular} section={props.section} isPopular={isPopular}
                  onPageChanged={onPageChanged} newsCards={newsCards} />
    )
}

export default compose(
    withRouter,
)(NewsListContainer)

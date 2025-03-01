import React, {useEffect, useState} from "react";
import {compose} from "redux";
import NewsList from "./NewsList";
import {useHistory, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getNewsCategory, getRecentNews} from "../../../redux/news-reducer";
import {getCurrentSection} from "../../../Common/getCurrentSection";
import queryString from 'querystring'
import {isDesktop} from 'react-device-detect'

const NewsListContainer = (props) => {
    const [checked, setChecked] = useState(isDesktop ? localStorage.getItem('checked') === 'true' : false)
    const [isPopular, setIsPopular] = useState(localStorage.getItem('is_popular') === 'true')
    const dispatch = useDispatch()
    const history = useHistory()

    const newsCards = useSelector(state => state.news.newsCards);
    const count = useSelector(state => state.news.count);
    const pageSize = useSelector(state => state.news.pageSize);
    const currentPage = useSelector(state => state.news.currentPage);
    const isFetch = useSelector(state => state.auth.isFetch);

    useEffect(() => {
        props.setSection(props.match.params.section ? props.match.params.section  : 'Главная')
        const url = new URLSearchParams(props.location.search)
        let page = url.get('page')
        if(props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), Number(page) || 1))
        }
        else {
            dispatch(getRecentNews('', Number(page) || 1, isPopular))
        }
    }, [props.match.params.section]);

    const onPageChanged = (pageNumber) => { // Поиск по новой странице + изменение текущей
        const query = {}
        if(props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), pageNumber))
        }
        else {
            dispatch(getRecentNews('', pageNumber, isPopular))
        }

        if (pageNumber !== 1) query.page = String(pageNumber)
        history.push({
            pathname: props.section === 'Главная' ? '/' : `/news/${props.section}`,
            search: queryString.stringify(query)
        })
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

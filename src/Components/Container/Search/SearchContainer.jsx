import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as queryString from 'querystring'
import {getNewsCategory, getRecentNews} from '../../../redux/news-reducer'
import {withRouter, useHistory} from 'react-router-dom'
import {compose} from 'redux'
import {getCurrentSection} from '../../../Common/getCurrentSection'
import NewsList from '../NewsList/NewsList'

const SearchContainer = (props) => {

    const [checked, setChecked] = useState(localStorage.getItem('checked') === 'true')
    const dispatch = useDispatch()

    const newsCards = useSelector(state => state.news.newsCards)
    const count = useSelector(state => state.news.count)
    const pageSize = useSelector(state => state.news.pageSize)
    const currentPage = useSelector(state => state.news.currentPage)
    const isFetch = useSelector(state => state.auth.isFetch)

    const history = useHistory()

    useEffect(() => {
        const url = new URLSearchParams(props.location.search)
        let letters = url.get('letters')
        let page = url.get('page')
        dispatch(getRecentNews(letters || '', Number(page) || 1))
    }, [props.location.search])

    const onPageChanged = (pageNumber) => { // Поиск по новой странице + изменение текущей
        const query = {}

        const url = new URLSearchParams(props.location.search)
        let letters = url.get('letters')

        if (letters) query.letters = letters
        if (pageNumber !== 1) query.page = String(pageNumber)
        history.push({
            pathname: '/search',
            search: queryString.stringify(query)
        })

        if (props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), pageNumber))
        } else {
            dispatch(getRecentNews(letters, pageNumber))
        }
    }

    const handleCheck = (checked) => {
        setChecked(checked)
        localStorage.setItem('checked', checked)
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
        <NewsList animationContainer={animationContainer} isFetch={isFetch} animationItem={animationItem}
                  title={'Поиск'} count={count} pageSize={pageSize} currentPage={currentPage}
                  checked={checked} handleCheck={handleCheck}
                  onPageChanged={onPageChanged} newsCards={newsCards} />
    )
}

export default compose(
    withRouter,
)(SearchContainer)

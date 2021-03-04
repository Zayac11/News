import React, {useEffect, useState} from "react";
import {compose} from "redux";
import NewsList from "./NewsList";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNewsCategory, getRecentNews} from "../../redux/news-reducer";
import {getCurrentSection} from "../../Common/getCurrentSection";

const NewsListContainer = (props) => {

    const [newsStructure, toggleNewsStructure] = useState('large')
    const dispatch = useDispatch()

    const newsCards = useSelector(state => state.news.newsCards);
    const count = useSelector(state => state.news.count);
    const pageSize = useSelector(state => state.news.pageSize);
    const currentPage = useSelector(state => state.news.currentPage);

    useEffect(() => {
        props.setSection(props.match.params.section ? props.match.params.section  : 'Главная')
        if(props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), 1))
        }
        else {
            dispatch(getRecentNews('', 1))
        }
    }, [props.match.params.section]);

    const onPageChanged = (pageNumber) => { // Поиск по новой странице + изменение текущей
        if(props.match.params.section) {
            dispatch(getNewsCategory(getCurrentSection(props.match.params.section), pageNumber))
        }
        else {
            dispatch(getRecentNews('', pageNumber))
        }

    }

    return (
        <NewsList title={'Новости'} count={count} pageSize={pageSize} currentPage={currentPage}
                  onPageChanged={onPageChanged} newsCards={newsCards} newsStructure={newsStructure} />
    )
}

export default compose(
    withRouter,
)(NewsListContainer)

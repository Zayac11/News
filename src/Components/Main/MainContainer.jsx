import React, {useEffect, useState} from 'react'
import {compose} from "redux";
import NewsList from "../../Common/NewsList/NewsList";
import {withRouter} from "react-router-dom";

const MainContainer = (props) => {

    const [newsStructure, toggleNewsStructure] = useState('large')

    useEffect(() => {
        props.setSection('Главная')
    }, [props]);

    return (
        <NewsList newsStructure={newsStructure} />
    )
}

export default compose(
    withRouter,
)(MainContainer)

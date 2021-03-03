import React, {useEffect, useState} from "react";
import {compose} from "redux";
import NewsList from "../../Common/NewsList/NewsList";
import {withRouter} from "react-router-dom";

const NewsListContainer = (props) => {

    // const [newsStructure, toggleNewsStructure] = useState('large')

    useEffect(() => {
        props.setSection(props.match.params.section)
    }, [props]);

    return (
        <NewsList />
    )
}

export default compose(
    withRouter,
)(NewsListContainer)

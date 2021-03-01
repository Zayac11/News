import React, {useState} from 'react'
import {compose} from "redux";
import NewsList from "../../Common/NewsList/NewsList";

const MainContainer = (props) => {

    const [newsStructure, toggleNewsStructure] = useState('large')

    return (
        <NewsList newsStructure={newsStructure} />
    )
}

export default compose()(MainContainer)

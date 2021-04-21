import React, {useEffect} from 'react'
import {compose} from "redux";
import InfoSidebar from "./InfoSidebar";
import {useDispatch, useSelector} from "react-redux";
import {getPopularAndPinnedNews} from "../../../redux/info-sidebar-reducer";

const InfoSidebarContainer = (props) => {

    const dispatch = useDispatch()
    const popular = useSelector(state => state.infoSidebar.popular);
    const pinned = useSelector(state => state.infoSidebar.pinned);

    useEffect( () => {

        dispatch(getPopularAndPinnedNews())
    }, [])

    return (
        <InfoSidebar popular={popular} pinned={pinned} />
    )
}

export default compose()(InfoSidebarContainer)

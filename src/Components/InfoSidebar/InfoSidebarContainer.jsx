import React from 'react'
import {compose} from "redux";
import InfoSidebar from "./InfoSidebar";

const InfoSidebarContainer = (props) => {
    return (
        <InfoSidebar />
    )
}

export default compose()(InfoSidebarContainer)

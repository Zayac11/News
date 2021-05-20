import React from 'react'
import {compose} from "redux";
import s from './SidePanel.module.scss'
import SectionSidebar from '../../SectionsSidebar/SectionSidebar'

const SidePanel = (props) => {
    return (
        <div className={s.panel}>
            <SectionSidebar />
        </div>
    )
}

export default compose()(SidePanel)

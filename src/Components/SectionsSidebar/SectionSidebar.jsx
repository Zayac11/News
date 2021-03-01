import React from 'react'
import {compose} from "redux";
import s from './SectionSidebar.module.scss'

const SectionSidebar = (props) => {
    return (
        <aside className={s.sidebar}>

        </aside>
    )
}

export default compose()(SectionSidebar)

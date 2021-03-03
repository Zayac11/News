import React, {useEffect, useState} from "react"
import {compose} from "redux";
import {Route, Switch, withRouter} from 'react-router-dom'
import MainContainer from "./Main/MainContainer";
import s from './Container.module.scss'
import InfoSidebarContainer from "./InfoSidebar/InfoSidebarContainer";
import SectionSidebar from "./SectionsSidebar/SectionSidebar";
import NavbarContainer from "./Navbar/NavbarContainer";
import NewsListContainer from "./NewsList/NewsContainer";

const Container = (props) => {

    const [section, setSection] = useState(props.match.params.section)

    return (
        <div className={'outer'}>
            <NavbarContainer section={section} />
            <div className={'container'}>
                <div className={s.content}>

                    <SectionSidebar />
                    <InfoSidebarContainer />

                    <Switch>
                        <Route exact path='/' render={ () => <MainContainer setSection={setSection} />} />
                        <Route exact path='/news/:section' render={ () => <NewsListContainer setSection={setSection} />} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default compose(
    withRouter,
)(Container)

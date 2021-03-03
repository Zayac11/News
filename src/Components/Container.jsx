import React from "react"
import {compose} from "redux";
import {Route, Switch} from 'react-router-dom'
import MainContainer from "./Main/MainContainer";
import s from './Container.module.scss'
import InfoSidebarContainer from "./InfoSidebar/InfoSidebarContainer";
import SectionSidebar from "./SectionsSidebar/SectionSidebar";
import NavbarContainer from "./Navbar/NavbarContainer";

const Container = (props) => {



    return (
        <div className={'outer'}>
            <NavbarContainer />
            <div className={'container'}>
                <div className={s.content}>

                    <SectionSidebar />
                    <InfoSidebarContainer />

                    <Switch>
                        <Route exact path='/' render={ () => <MainContainer />} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default compose()(Container)

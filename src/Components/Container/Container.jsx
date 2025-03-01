import React, {useState} from "react"
import {compose} from "redux";
import {Route, Switch, withRouter} from 'react-router-dom'
import s from './Container.module.scss'
import InfoSidebarContainer from "./InfoSidebar/InfoSidebarContainer";
import SectionSidebar from "./SectionsSidebar/SectionSidebar";
import NavbarContainer from "./Navbar/NavbarContainer";
import NewsListContainer from "./NewsList/NewsListContainer";
import CreateNewsContainer from "./CreateNews/CreateNewsContainer";
import UpdateNewsContainer from "./UpdateNews/UpdateNewsContainer";
import NewsContainer from "./News/NewsContainer";
import SearchContainer from "./Search/SearchContainer";
import TopInfoContainer from './TopInfo/TopInfoContainer'
import {isDesktop} from 'react-device-detect'


const Container = (props) => {

    const [section, setSection] = useState(props.match.params.section)

    return (
        <div className={'outer'}>
            <NavbarContainer section={section} />

            <TopInfoContainer />
            <div className={'container'}>
                <div className={s.content}>
            {
                    isDesktop &&
                    <div className={s.sidebarContainer}>
                        <SectionSidebar />
                    </div>
            }
                    <InfoSidebarContainer />

                    <div className={s.main}>
                        <Switch>
                            <Route exact path='/' render={ () => <NewsListContainer section={section} setSection={setSection} />} />
                            <Route exact path='/create_news' render={ () => <CreateNewsContainer />} /> {/*Создание новости*/}
                            <Route exact path='/search' render={ () => <SearchContainer />} /> {/*Страница поиска*/}
                            <Route exact path='/create_news/:newsId' render={ () => <UpdateNewsContainer />} /> {/*Редактирование новости*/}
                            <Route exact path='/current_news/:newsId' render={ () => <NewsContainer />} /> {/*Страница новости*/}
                            <Route exact path='/news/:section' render={ () => <NewsListContainer section={section} setSection={setSection} />} />
                        </Switch>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default compose(
    withRouter,
)(Container)

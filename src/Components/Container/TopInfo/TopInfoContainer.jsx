import React, {useEffect} from 'react'
import {compose} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {
    getCovidInformation,
    getMoscowWeather,
    getCurrency
} from '../../../redux/info-sidebar-reducer'
import TopInfo from './TopInfo'

const TopInfoContainer = (props) => {

    const dispatch = useDispatch()
    const newCases = useSelector(state => state.infoSidebar.newCases);
    const total = useSelector(state => state.infoSidebar.total);
    const moscowTemp = useSelector(state => state.infoSidebar.moscowTemp);
    const usd = useSelector(state => state.infoSidebar.usd);
    const eur = useSelector(state => state.infoSidebar.eur);

    useEffect( () => {

        dispatch(getCovidInformation())
        dispatch(getMoscowWeather())
        dispatch(getCurrency())
    }, [])

    return (
        <TopInfo newCases={newCases} eur={eur} usd={usd} moscowTemp={moscowTemp} total={total} />
    )
}

export default compose()(TopInfoContainer)

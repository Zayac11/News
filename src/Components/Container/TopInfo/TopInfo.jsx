import React from 'react'
import {compose} from 'redux'
import s from './TopInfo.module.scss'
import covid from '../../../assets/images/coronavirus.svg'
import weather from '../../../assets/images/cloudy.svg'
import dollar from '../../../assets/images/dollar.svg'
import euro from '../../../assets/images/euro.svg'

const TopInfo = (props) => {
    return (
        <div className={s.topContainer}>
            <div className={'container'}>
                <div className={s.top}>
                    <span className={s.weather}>
                       <img src={weather} alt='weather' /> Москва, +{Math.trunc(props.moscowTemp)}°C
                    </span>

                    <span className={s.covid}>
                        <img src={covid} alt='covid' />
                        <span className={s.covidTitle}>Covid-19</span>
                        Всего в России: <span className={s.value}> &nbsp;{props.total}</span>. Новых случаев: <span className={s.value}> &nbsp;{props.newCases}</span>
                    </span>

                    <span className={s.currency}>
                        <span className={s.dollar}>
                            <img src={dollar} alt='dollar' />{props.usd}
                        </span>
                        <span className={s.euro}>
                            <img src={euro} alt='euro' />{props.eur}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default compose()(TopInfo)



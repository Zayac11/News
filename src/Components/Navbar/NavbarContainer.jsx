import React from 'react'
import {compose} from "redux";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {

    //Сделать метод, который каждую минуту будет обновлять время через SetInterval()

    return (
        <Navbar />
    )
}

export default compose()(NavbarContainer)

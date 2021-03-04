import React from "react"
import Switch from "react-switch";

const SwitchNews = (props) => {
    return (
        <Switch
            checked={props.checked}
            onChange={props.handleCheck}
            onColor="#888"
            onHandleColor="#888"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
            height={10}
            width={30}
            className="react-switch"
            id="material-switch"
        />
    )
}

export default SwitchNews

import React from "react";
import {connect} from "react-redux";
import Preloader from "../Common/Preloader/Preloader";

let mapStateToPropsForFetching = (state) => {
    return {
        isFetch: state.auth.isFetch,
    };
}

export const withRequestFetching = (Component) => {

    class withRequestFetching extends React.Component {

        render() {

            if(this.props.isFetch) {
                return <Preloader />
            }

            return (
                <Component {...this.props} />
            )
        }
    }


    let ConnectedWithRequestFetching = connect(mapStateToPropsForFetching)(withRequestFetching);

    return ConnectedWithRequestFetching;
}

import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsForFetching = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
}

export const withAuthRedirect = (Component) => {

    class withAuthRedirect extends React.Component {

        render() {

            if(!this.props.isAuth) {
                return <Redirect to={'/'} />
            }

            return (
                <Component {...this.props} />
            )
        }
    }


    let ConnectedWithAuthRedirect = connect(mapStateToPropsForFetching)(withAuthRedirect);

    return ConnectedWithAuthRedirect;
}

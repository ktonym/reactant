import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";

const GuestRoute = ({isAuthenticated, component: C, ...rest}) => (
    <Route
        {...rest}
        render={ props =>
            !isAuthenticated ? <C {...props}/> : <Redirect to="/dashboard"/>
        }
    />
);

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.access_token
});

export default connect(mapStateToProps)(GuestRoute);
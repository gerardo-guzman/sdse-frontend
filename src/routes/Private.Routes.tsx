import React from 'react';
import { Route, Redirect, } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PrivateRoute:React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
    isAuth: boolean;
}> = ({
    isAuth,
    path,
    exact,
    component
}) => {
    return (
        isAuth
        ? <Route path={path} exact={exact} component={component} />
        : <Redirect to='/login' />
    );
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired
}



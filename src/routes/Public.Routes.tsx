import React from 'react';
import { Redirect, Route, } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PublicRoute:React.FC<{
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
        !isAuth
        ? <Route path={path} exact={exact} component={component} />
        : <Redirect to='/' />
    );
}

PublicRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired
}

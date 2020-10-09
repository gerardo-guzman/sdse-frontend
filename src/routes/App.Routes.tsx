import React, { useContext } from 'react';
import { Redirect, Route, BrowserRouter as RouterDom, Switch } from 'react-router-dom';
import { About } from '../views/About';
import { BriefList } from '../views/BriefList';

//components
import { ProfileScreen } from '../views/ProfileScreen';
import { TeacherList } from '../views/TeacherList';
import { LogIn } from '../views/LogIn';
import { SignUp } from '../views/SignUp';
import { PublicRoute } from './Public.Routes';
import { PrivateRoute } from './Private.Routes';
import { AuthContext } from '../auth/AuthContext';

export const AppRoutes = () => {
    const { user } = useContext(AuthContext);
    return (
        <RouterDom>
            <>
            <Switch>
                <Route exact path='/' component={ About } />
                <Route exact path='/briefs/:query' component={ BriefList } />
                <PublicRoute exact={true} path='/login' component={ LogIn } isAuth={user?.logged!} />
                <PublicRoute exact={true} path='/registrarse' component={ SignUp } isAuth={user?.logged!} />
                <PrivateRoute exact={true} path='/perfil/:id' component={ ProfileScreen } isAuth ={user?.logged!} />
                <PrivateRoute exact={true} path='/profesores' component={ TeacherList } isAuth ={user?.logged!} />
                <Redirect to='/' />
            </Switch>
            </>
        </RouterDom>
    );
}

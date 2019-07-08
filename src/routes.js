import React from 'react';
import { Auth } from './Auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Login from './GlobalComponents/Login';
import ErrorPage from './GlobalComponents/Error';
import RegisterUser from './GlobalComponents/RegisterUser';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth() ?
                (<Component {...props} />) :
                (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registerUser" component={RegisterUser} />
            <PrivateRoute exact path="/home" component={Home} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
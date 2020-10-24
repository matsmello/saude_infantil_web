import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/main.css'

const index = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
        </Switch>
    </ BrowserRouter>
)

export default index;
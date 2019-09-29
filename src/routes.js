import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PortfolioManagement from './containers/PortfolioManagement/PortfolioManagement';
import AdminLogin from './components/Login/Admin';
import CustomerLogin from './components/Login/Customer';

export default (
    <Route>
        <Route  exact path="/" component={HomePage} />
        <Route path="/porfolio" component={PortfolioManagement} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/customerLogin" component={CustomerLogin} />

    </Route>  
);

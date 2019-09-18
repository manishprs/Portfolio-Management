import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PortfolioManagement from './containers/PortfolioManagement/PortfolioManagement';

export default (
    <Route>
        <Route  exact path="/" component={HomePage} />
        <Route path="/porfolio" component={PortfolioManagement} />
    </Route>  
);

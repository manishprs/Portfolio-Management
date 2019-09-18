import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PortfolioManagement from '../src/store/reducers/portfolioManagement';

axios.defaults.baseURL = 'http://52.24.15.178:8085';

axios.defaults.headers = { 
   'Content-Type': 'text/plain' || 'application/json',
   'Cache-Control': 'no-store',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Method': 'access-control-request-method' || '*',  // TODO: case insensitive
   'Access-Control-Allow-Headers': 'access-control-request-headers'|| '*', // cache-busting
};

const rootReducer = combineReducers({
   pm: PortfolioManagement
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
   <Provider store={ store }>
      <Router history={createBrowserHistory()}>
         {routes}
      </Router>
   </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

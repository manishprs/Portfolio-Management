import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';

// Persist Redux Configuration Imports
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import * as serviceWorker from './serviceWorker';
import pmReducer from '../src/store/reducers/pmReducer';
import authReducer from '../src/store/reducers/authReducer';

axios.defaults.baseURL = 'http://52.24.15.178:8085';

axios.defaults.headers = { 
   'Content-Type': 'text/plain' || 'application/json',
   'Cache-Control': 'no-store',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Method': 'access-control-request-method' || '*',  // TODO: case insensitive
   'Access-Control-Allow-Headers': 'access-control-request-headers'|| '*', // cache-busting
};

const rootReducer = combineReducers({
   pm: pmReducer,
   auth: authReducer
});

const persistConfig = {
   key: 'root',
   storage,
   whitelist: [authReducer], //only auth reducer needs to be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

render(
   <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
         <Router history={createBrowserHistory()}>
            {routes}
         </Router>
      </PersistGate>
   </Provider>,
   document.getElementById('root'));

serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import {Provider} from 'react-redux';
import integratedReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';

const middleware = applyMiddleware(logger, thunk, promise);

const store = createStore(integratedReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

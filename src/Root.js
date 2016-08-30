import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {Header, MainPage} from './components';

const reducer = combineReducers({
    routing: routerReducer,
});
const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Header}>
                <IndexRoute component={MainPage} />
            </Route>
        </Router>
    </Provider>
);

export default Root;

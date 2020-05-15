import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/index';
import './index.css';
// import PlayerResults from './pages/PlayerResults'
import Login from './pages/Login';
import PlayerForm from './pages/PlayerForm';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
    <Router>
    <>
    <Switch>
      <Route exact path="/" render={()=><Login/>} />
      <Route path="/app" render={()=><PlayerForm/>} />
      </Switch>
     
    </>
</Router>

</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



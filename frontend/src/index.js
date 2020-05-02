import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import PlayerResults from './pages/PlayerResults'
import Login from './pages/Login'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import allReducers from './reducers/index';
import { createStore } from 'redux';
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
    <Router>
    <>
    <Switch>
      <Route exact path="/" render={()=><Login/>} />
      <Route path="/app" render={()=><App/>} />
      </Switch>
     
    </>
</Router>
{/* <App /> */}
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route,Switch, Redirect } from "react-router-dom";
// import {ProtectedRoute} from './components/withAuth'
// import PlayerResults from './pages/PlayerResults'
// import Login from './pages/Login'
// // import PlayerForm from './pages/PlayerForm'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux'
// import allReducers from './reducers/index';
// import { createStore } from 'redux';
// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// ReactDOM.render(
//     <Provider store={store}>
//     <Router>
//       <>
//     {/* <Switch> */}
//       <Route exact path="/" render={()=> <Login/>}/>
//       <Route path="/appi" render={()=><App/>}/>
// </>
//     {/* </Switch> */}
// </Router>
// {/* <App /> */}
// </Provider>
// , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

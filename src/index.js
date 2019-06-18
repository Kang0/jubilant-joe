import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import NavbarContainer from './containers/NavbarContainer'

//redux
import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import challengeReducer from './reducers/challengeReducer'
import userReducer from './reducers/userReducer'
import lockerReducer from './reducers/lockerReducer'
import calendarReducer from './reducers/calendarReducer'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  challenges: challengeReducer,
  user: userReducer,
  locker: lockerReducer,
  calendar: calendarReducer
})

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <NavbarContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

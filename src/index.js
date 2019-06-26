import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; 
import rootSaga from './redux/sagas'; 

import App from './App';

const sagaMiddleware = createSagaMiddleware();

// If in development mode use logger otherwise don't
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// creates redux store
// applyMiddleWare tells store to use the sagaMiddleWare
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

// run the watcher saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // HOC allows store to be accessed across all nodes
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

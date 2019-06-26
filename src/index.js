import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { takeLatest, put } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();


// get calculator history
// query to database already limits history to last 10 entries
function* getHistory(){
  const result = yield axios.get('/calculator');
  console.log(`result of getHistory`, result);
  
}

function* watcherSaga (){
  yield takeLatest("GET_HISTORY", getHistory)
}


const storeInstance = createStore(

  // combineReducers({

  // }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watcherSaga);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getHistory() {
  try{
    const result = yield axios.get('/calculator');
    console.log(`result`, result.data);
    yield put({type: "SET_HISTORY", payload: result.data})
  }
  catch{
    alert(`Sorry, couldn't get the calculator history please try again later.`)
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_HISTORY', getHistory);
}

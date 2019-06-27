import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getHistory() {
  try{
    const result = yield axios.get('/calculator');
    yield put({type: "SET_HISTORY", payload: result.data})
  }
  catch{
    alert(`Sorry, couldn't get the calculator history. Please try again later.`)
  }
}

function* postExpression(action) {
  try {
    console.log(`action.payload`, action.payload);
    
    yield axios.post('/calculator', action.payload);
    yield put({
      type: "GET_HISTORY",
    })
  } catch {
    alert(`Sorry, couldn't store that expressoin. Please try again later`)
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_HISTORY', getHistory);
  yield takeLatest('POST_EXPRESSION', postExpression)
}

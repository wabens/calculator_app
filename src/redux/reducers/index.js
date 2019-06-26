import { combineReducers } from 'redux';

const historyReducer = ( state= [] , action) => {
  if (action.type === "SET_HISTORY"){
    return action.payload
  }
  else{
    return state
  }
}


const rootReducer = combineReducers({
  historyReducer
});

export default rootReducer;

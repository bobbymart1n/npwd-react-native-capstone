import reducer from './reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  phoneNumberDetails: reducer
});

export default rootReducer;

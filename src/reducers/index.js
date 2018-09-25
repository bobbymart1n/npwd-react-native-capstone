import reducer from './reducer';
import navReducer from './navReducer';
import phoneNumber from './phoneNumber';
import results from './results';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  nav: navReducer,
  phoneNumberDetails: reducer,
  phoneNumber: phoneNumber,
  phoneNumberResults: results
});

export default rootReducer;

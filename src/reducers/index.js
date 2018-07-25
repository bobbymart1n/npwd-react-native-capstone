import reducer from './reducer';
import navReducer from './navReducer';
import phoneNumber from './phoneNumber';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  nav: navReducer,
  phoneNumberDetails: reducer,
  phoneNumber: phoneNumber
});

export default rootReducer;

import reducer from './reducer';
import navReducer from './navReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  nav: navReducer,
  phoneNumberDetails: reducer
});

export default rootReducer;

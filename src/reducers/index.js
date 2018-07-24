import reducer from './reducer';
import fontReducer from './fontReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  phoneNumberDetails: reducer,
  fontLoaded: fontReducer
});

export default rootReducer;

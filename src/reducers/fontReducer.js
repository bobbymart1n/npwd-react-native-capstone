import constants from './../constants';
const { types } = constants;

const fontReducer = (state = false, action) => {
  switch(action.type) {
  case types.FONT_LOADED:
    let newState = true;
    return newState;
  default:
    return state;
  }
}

export default fontReducer;

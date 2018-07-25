import constants from './../constants';
const { types } = constants;
const phoneNumber = (state = 0, action) => {
  switch(action.type) {
    case types.PHONE_NUMBER_ENTRY:
      let newState = action.number
      return newState;
    default:
      return state;
  }
}

export default phoneNumber;

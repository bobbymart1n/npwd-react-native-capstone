import constants from './../constants';
const { types, initialState } = constants;
const reducer = (state = {}, action) => {
  switch(action.type) {
  case types.REQUEST_CHECK:
    return {
      data: '',
      number: action.number,
      error: false
    };
  case types.CHECK_NUMBER_SUCCEEDED:
    return {
      data: action.data,
      error: false
    };
  case types.CHECK_NUMBER_FAILED:
    return {
      data: '',
      error: true
    }
  default:
    return state;
  }
};
 export default reducer

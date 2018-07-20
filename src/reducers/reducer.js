import constants from './../constants';
const { types, initialState } = constants;
const reducer = (state = initialState.testNumber, action) => {
  switch(action.type) {
  case types.REQUEST_CHECK:
    return {
      url: '',
      error: false
    };
  case types.CHECK_NUMBER_SUCCEEDED:
    return {
      url: action.url,
      error: false
    };
  case types.CHECK_NUMBER_FAILED:
    return {
      url: '',
      error: true
    }
  case types.CHECK_NUMBER:
    const { phoneNumber, reputationLevel, reputationDetails, reportCount } = action;
    let newState = Object.assign({}, state, {
      [phoneNumber]: {
        phoneNumber: phoneNumber,
        reputationLevel: reputationLevel,
        reputationDetails: reputationDetails,
        reportCount: reportCount
      }
    });
    return newState;
  default:
    return state;
  }
};
 export default reducer

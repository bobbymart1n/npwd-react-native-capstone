import types from './../constants';
const reducer = (state = {}, action) => {
  switch(action.type) {
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
}
 export default reducer

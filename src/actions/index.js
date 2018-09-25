import constants from './../constants';
const { types } = constants;

// Starts watcherTestSaga
export const fetchNumber = (number) => {
  return { type: types.FETCHED_NUMBER, number: number }
};
// Starts initial GET Request
export const requestNumber = () => {
  return { type: types.REQUEST_CHECK }
};
// Ends promise with requested data
export const requestNumberSuccess = (resolve) => {
  return { type: types.CHECK_NUMBER_SUCCEEDED, data: resolve }
};
// Ends promise with error from request
export const requestNumberFailed = () => {
  return { type: types.CHECK_NUMBER_FAILED }
};

export const requestResults = () => {
  return { type: types.POST_NUMBER_RESULTS }
}
export const requestResultsSuccess = (resolve) => {
  return { type: types.POST_NUMBER_RESULTS_SUCCESS, data: resolve }
}

// Stores user entered phone number
export const phoneNumberEntry = (number) => {
  return { type: types.PHONE_NUMBER_ENTRY, number: number }
};

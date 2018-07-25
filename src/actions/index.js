import constants from './../constants';
const { types } = constants;

export const requestNumber = (number) => {
  return { type: types.REQUEST_CHECK, number: number }
};

export const requestNumberSuccess = (resolve) => {
  return { type: types.CHECK_NUMBER_SUCCEEDED, data: resolve }
};

export const requestNumberFailed = () => {
  return { type: types.CHECK_NUMBER_FAILED }
};

export const phoneNumberEntry = (number) => {
  return { type: types.PHONE_NUMBER_ENTRY, number: number }
};

export const fetchNumber = (number) => {
  return { type: types.FETCHED_NUMBER, number: number }
};

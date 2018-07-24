import constants from './../constants';
const { types } = constants;

export const requestNumber = () => {
  return { type: types.REQUEST_CHECK }
};

export const requestNumberSuccess = (data) => {
  return { type: types.CHECK_NUMBER_SUCCEEDED, data: data }
};

export const requestNumberFailed = () => {
  return { type: types.CHECK_NUMBER_FAILED }
};

export const fetchNumber = () => {
  return { type: types.FETCHED_NUMBER }
};

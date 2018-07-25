import constants from './../constants';
const { types } = constants;

export const requestNumber = () => {
  return { type: types.REQUEST_CHECK }
};

export const requestNumberSuccess = (resolve) => {
  return { type: types.CHECK_NUMBER_SUCCEEDED, data: resolve }
};

export const requestNumberFailed = () => {
  return { type: types.CHECK_NUMBER_FAILED }
};

export const fetchNumber = () => {
  return { type: types.FETCHED_NUMBER }
};

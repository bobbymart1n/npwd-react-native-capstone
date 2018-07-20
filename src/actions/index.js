import types from './../constants';

export const fetchPhoneNumber = (number) => {
  return { type: types.CHECK_NUMBER, number: number };
}

export const fetchNumber = () => {
  return { type: types.CHECK_NUMBER }
};

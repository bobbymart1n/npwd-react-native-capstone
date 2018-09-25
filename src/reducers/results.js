import constants from './../constants';
const { types, initialState } = constants;

const results = (state = {}, action) => {
  switch(action.type) {
    case types.POST_NUMBER_RESULTS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default results

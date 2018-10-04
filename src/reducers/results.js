import constants from './../constants';
const { types, initialState } = constants;

const results = (state = {}, action) => {
  switch(action.type) {
    case types.GET_NUMBER_RESULTS:
      return {
        ...state,
        data: ''
      }
    case types.GET_NUMBER_RESULTS_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case types.POST_NUMBER_RESULTS:
      return {
        ...state,
        data: ''
      }
    case types.POST_NUMBER_RESULTS_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default results

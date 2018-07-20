import reducer from './../src/reducers/reducer';
import types from './../src/constants';

describe('Reducer', () => {
  let action;
  const sampleResponseData = {
    phoneNumber: '5558675309',
    reputationLevel: 3,
    reputationDetails: {
      score: 75,
      type: 'RiskType',
      category: 'ScamOrFraud'
    },
    reportCount: 3
  };
  it('Should return state', () => {
    expect(reducer({}, { type: null })).toEqual({});
  });

  it('Should return data after API call', () => {
    const { phoneNumber, reputationLevel, reputationDetails, reportCount } = sampleResponseData;
    action = {
      type: types.CHECK_NUMBER,
      phoneNumber: phoneNumber,
      reputationLevel: reputationLevel,
      reputationDetails: reputationDetails,
      reportCount: reportCount
    };
    expect(reducer({}, action)).toEqual({
      [phoneNumber]: {
        phoneNumber: phoneNumber,
        reputationLevel: reputationLevel,
        reputationDetails: reputationDetails,
        reportCount: reportCount
      }
    })
  });
})

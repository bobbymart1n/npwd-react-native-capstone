import { takeEvery, call, put, fork } from "redux-saga/effects";
import { requestNumber, requestNumberFailed, requestNumberSuccess, requestResults, requestResultsSuccess } from './../actions';
import { apiKey } from './../constants/apiKey';
import constants from './../constants';
const { types } = constants;

export default function* root() {
  yield fork(watcherTestSaga)
}

function* watcherTestSaga() {
  yield takeEvery(types.FETCHED_NUMBER, fetchPhoneNumber);
  yield takeEvery(types.GET_NUMBER_RESULTS, fetchResults);
  yield takeEvery(types.POST_NUMBER_RESULTS, addNewNumberToResults);
}

function* fetchPhoneNumber(number) {
  try {
    yield put(requestNumber());
    const data = yield call(() => {
      return fetch('https://proapi.whitepages.com/3.0/phone_reputation?api_key=' + apiKey + '&phone.country_hint=US&phone=' + number.number)
      .then(res => res.json());
    });
    yield put(requestNumberSuccess(data));
  } catch (error) {
    yield put(requestNumberFailed(error))
  }
}
// Fetches numbers in the database
function* fetchResults() {
  try {
    const data = yield call(() => {
      return fetch(`https://capstone-backend.firebaseapp.com/api/v1/numbers`).then(res => res.json());
    })
    yield put(requestResultsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

// POSTS numbers to the data base
function* postResults(numberData) {
  const response = fetch(`https://capstone-backend.firebaseapp.com/api/v1/numbers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(numberData)
  })
  yield put(postNumberResultSuccess(response));
}

function* addNewNumberToResults(results) {
  console.log(results);
  try {
    yield postResults(results.numberResults)
  } catch (error) {
    console.log(error);
  }
}

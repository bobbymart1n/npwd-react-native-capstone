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
  yield takeEvery(types.POST_NUMBER_RESULTS, fetchResults);
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

function* fetchResults() {
  try {
    // yield put(requestResults())
    const data = yield call(() => {
      return fetch(`https://capstone-backend.firebaseapp.com/api/v1/numbers`).then(res => res.json());
    })
    console.log(data);
    yield put(requestResultsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

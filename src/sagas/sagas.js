import { takeEvery, call, put } from "redux-saga/effects";
import { fetchPhoneNumber, fetchNumber } from './../actions';
import constants from './../constants';
const { types } = constants;
function* watcherTestSaga() {
  yield takeEvery(types.CHECK_NUMBER, fetchPhoneNumber);
}

export default watcherTestSaga;

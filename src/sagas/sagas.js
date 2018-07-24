import { takeEvery, call, put, fork } from "redux-saga/effects";
import { requestNumber, requestNumberFailed, requestNumberSuccess, fontLoader } from './../actions';
import constants from './../constants';
const { types } = constants;
import { fakeData } from './../constants/dummyTest';

const getFakeData = () => Promise.resolve(fakeData)

export default function* root() {
  yield [
    fork(watcherTestSaga)
  ]
}

function* watcherTestSaga() {
  yield takeEvery(types.FETCHED_NUMBER, fetchPhoneNumber);
}


function* fetchPhoneNumber() {
  try {
    yield put(requestNumber());
    const data = yield call(getFakeData)
    yield put(requestNumberSuccess(data));
  } catch (error) {
    yield put(requestNumberFailed(error))
  }
}

import { takeEvery, call, put } from "redux-saga/effects";
import { requestNumber, requestNumberFailed, requestNumberSuccess } from './../actions';
import constants from './../constants';
const { types } = constants;
function* watcherTestSaga() {
  yield takeEvery(types.FETCHED_NUMBER, fetchPhoneNumber);
}

function* fetchPhoneNumber() {
  try {
    yield put(requestNumber());
    const data = yield call(() => {
      return fetch('./../constants/dummyTest.json')
              .then(res => res.json())
    });
    yield put(requestNumberSuccess(data));
  } catch (error) {
    yield put(requestNumberFailed(error))
  }
}

export default watcherTestSaga;

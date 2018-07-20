import { takeEvery, call, put } from "redux-saga/effects";
import { requestNumber, requestNumberFailed, requestNumberSuccess } from './../actions';
import constants from './../constants';
const { types } = constants;
import { fakeData } from './../constants/dummyTest';

const getFakeData = () => Promise.resolve(fakeData)

function* watcherTestSaga() {
  yield takeEvery(types.FETCHED_NUMBER, fetchPhoneNumber);
}

function* fetchPhoneNumber() {
  try {
    yield put(requestNumber());
    const data = yield call(getFakeData)
    console.log(data)
    yield put(requestNumberSuccess(data));
  } catch (error) {
    yield put(requestNumberFailed(error))
  }
}

export default watcherTestSaga;

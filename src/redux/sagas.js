import { call, all, put, takeEvery } from 'redux-saga/effects';
import { fetchStationInfo } from '../util/api';
import * as actions from './actions';

export function* loadStation(name) {
  try {
    const data = yield call(fetchStationInfo, name)
    yield put(actions.loadStationSuccess(data));
  } catch (error) {
    yield put(actions.loadStationError(error));
  }
}

export function* watchLoadStationRequest() {
  yield takeEvery(actions.STATION_LOAD_REQUEST, loadStation);
}

export default function* rootSaga() {
  yield all([
    watchLoadStationRequest()
  ])
};

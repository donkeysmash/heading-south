import { call, all, put, takeLatest } from 'redux-saga/effects';
import { fetchStationInfo } from '../util/api';
import * as actions from './actions';

export function* loadStation(action) {
  try {
    const data = yield call(fetchStationInfo, action.uri);
    yield put(actions.loadStationSuccess(action.uri, data));
  } catch (error) {
    yield put(actions.loadStationError(action.uri, error));
  }
}

export function* watchLoadStationRequest() {
  yield takeLatest(actions.STATION_LOAD_REQUEST, loadStation);
}

export default function* rootSaga() {
  yield all([
    watchLoadStationRequest()
  ])
};

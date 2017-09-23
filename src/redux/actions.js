export const STATION_LOAD_REQUEST = 'STATION_LOAD_REQUEST';
export const STATION_LOAD_SUCCESS = 'STATION_LOAD_SUCCESS';
export const STATION_LOAD_ERROR = 'STATION_LOAD_ERROR';

export const loadStationRequest = name => ({
  type: STATION_LOAD_REQUEST,
  name
});
export const loadStationSuccess = data => ({
  type: STATION_LOAD_SUCCESS,
  data
});
export const loadStationError = error => ({
  type: STATION_LOAD_REQUEST,
  error
});

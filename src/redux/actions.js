export const STATION_LOAD_REQUEST = 'STATION_LOAD_REQUEST';
export const STATION_LOAD_SUCCESS = 'STATION_LOAD_SUCCESS';
export const STATION_LOAD_ERROR = 'STATION_LOAD_ERROR';

export const loadStationRequest = uri => ({
  type: STATION_LOAD_REQUEST,
  uri
});
export const loadStationSuccess = (uri, data) => ({
  type: STATION_LOAD_SUCCESS,
  uri,
  data
});
export const loadStationError = (uri, error) => ({
  type: STATION_LOAD_ERROR,
  uri,
  error
});

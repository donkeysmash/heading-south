import * as actions from '../actions';
const {
  STATION_LOAD_REQUEST,
  STATION_LOAD_SUCCESS,
  STATION_LOAD_ERROR
} = actions;

const filterStops = stops =>
  stops.reduce((acc, eachStop) => {
    if (eachStop.routes && eachStop.routes.length)
      acc[eachStop.uri] = eachStop;
    return acc
  }, {})


const station = (state = {}, action) => {
  switch(action.type) {
    case STATION_LOAD_REQUEST:
      return {
        ...state,
        requesting: true,
        success: undefined
      };
    case STATION_LOAD_SUCCESS:
      const { stops, name, time, uri } = action.data;
      return {
        ...state,
        requesting: false,
        success: true,
        name, time, uri,
        stops : filterStops(stops)
      }
    case STATION_LOAD_ERROR:
      return {
        ...state,
        requesting: false,
        success: false
      }
    default:
      return state;
  }
}

const stations = (state = {}, action) => {
  switch(action.type) {
    case STATION_LOAD_REQUEST:
    case STATION_LOAD_SUCCESS:
    case STATION_LOAD_ERROR:
      return {
        ...state,
        [action.uri]: station(state[action.uri], action)
      };
    default:
      return state;
  }
}

export default stations;

import { combineReducers } from 'redux';
import * as actions from '../actions';
const {
  STATION_LOAD_REQUEST,
  STATION_LOAD_SUCCESS,
  STATION_LOAD_ERROR
} = actions;

const station = (state = {}, action) => {
  switch(action.type) {
    case STATION_LOAD_REQUEST:
      return {
        ...state,
        requesting: true,
        success: undefined
      };
    case STATION_LOAD_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true
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
        [action.uri]: station(state[action.uri], action)
      };
    default:
      return state;
  }
}

export default combineReducers({
  stations
});

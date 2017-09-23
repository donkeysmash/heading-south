import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as actions from './actions';

const stations = (state = fromJS({}), action) => {
  const {
    STATION_LOAD_REQUEST,
    STATION_LOAD_SUCCESS,
    STATION_LOAD_ERROR
  } = actions;
  switch(action.type) {
    case STATION_LOAD_SUCCESS:
    case STATION_LOAD_REQUEST:
    case STATION_LOAD_ERROR:
    default:
      return state;
  }
}

export default combineReducers({
  stations
});

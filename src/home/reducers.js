import { combineReducers } from 'redux';
import { SET_ORIGIN,  SET_DESTINATION } from './actions';

const initialState = {
  origin: '北京',
  destination: '上海',
  showCityList: false,
  showDateSelection: false,
  isHighSpeed: false,
  isLoadingCityData: false,
  cityData: null,
};

const stationReducer = (reducerState, action) => {
  const state = reducerState ?? initialState;
  switch (action.type) {
    case SET_ORIGIN:
      return {
        ...state,
        origin: action.origin,
      };

    case SET_DESTINATION:
      return {
        ...state,
        destination: action.destination,
      };

    default:
      return state;
  }
};

export default combineReducers({
  station: stationReducer,
});

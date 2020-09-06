import { combineReducers } from 'redux';

const initialState = {
  origin: '北京',
  destination: '上海',
  displayCityList: false,
  displayDateSelection: false,
  isHighSpeed: false,
  isLoadingCityData: false,
  cityData: null,
};

const stationReducer = (reducerState, action) => {
  const state = reducerState ?? initialState;
  return state;
}

export default combineReducers({
  station: stationReducer
});

import { combineReducers } from 'redux';
import * as Constants from './constants';

const initialState = {
  origin: '北京',
  destination: '上海',
  isCitySelectorVisible: false,
  hasError: false,
  isLoadingCityData: false,
  cityData: null,
  showDateSelection: false,
  isHighSpeed: false,
};

const homeReducer = (reducerState, action) => {
  const state = reducerState ?? initialState;
  switch (action.type) {
    case Constants.SET_ORIGIN:
      return {
        ...state,
        origin: action.origin,
      };

    case Constants.SET_DESTINATION:
      return {
        ...state,
        destination: action.destination,
      };

    case Constants.SET_IS_CITY_SELECTOR_VISIBLE:
      return {
        ...state,
        isCitySelectorVisible: action.isCitySelectorVisible,
      };

    case Constants.SET_IS_LOADING_CITY_DATA:
      return {
        ...state,
        isLoadingCityData: true,
        hasError: false,
      };

    case Constants.SET_CITY_DATA:
      return {
        ...state,
        cityData: action.cityData,
        isLoadingCityData: false,
        hasError: false,
      };

    case Constants.SET_RECEIVE_CITY_DATA_FAILED:
      return {
        ...state,
        isLoadingCityData: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export default combineReducers({
  home: homeReducer,
});

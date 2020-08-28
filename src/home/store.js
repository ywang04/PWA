import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
    origin: '北京',
    destination: '上海',
    displayCityList: false,
    displayDateSelection: false,
    isHighSpeed: false,
    isLoadingCityData: false,
    cityData: null
  },
  applyMiddleware(thunk)
);

import * as Constants from './constants';

export const setOrigin = origin => ({
  type: Constants.SET_ORIGIN,
  origin,
});

export const setDestination = destination => ({
  type: Constants.SET_DESTINATION,
  destination,
});

export const swapStations = (origin, destination) => dispatch => {
  dispatch(setOrigin(destination));
  dispatch(setDestination(origin));
};

export const updateSideSelection = isLeftSelected => ({
  type: Constants.SET_SIDE_SELECTION,
  isLeftSelected,
});

export const updateCitySelectorVisible = isCitySelectorVisible => ({
  type: Constants.SET_IS_CITY_SELECTOR_VISIBLE,
  isCitySelectorVisible: !isCitySelectorVisible,
});

export const requestCityData = () => ({
  type: Constants.SET_IS_LOADING_CITY_DATA,
});

export const requestCityDataFailed = () => ({
  type: Constants.SET_RECEIVE_CITY_DATA_FAILED,
});

export const setCityData = cityData => ({
  type: Constants.SET_CITY_DATA,
  cityData,
});

// export const toggleHighSpeed = status => ({
//   type: 'SET_IS_HIGH_SPEED',
//   status,
// });

export const fetchCityData = () => dispatch => {
  dispatch(requestCityData());
  fetch('/rest/cities?_' + Date.now())
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(cityData => {
      dispatch(setCityData(cityData));
    })
    .catch(() => dispatch(requestCityDataFailed()));
};

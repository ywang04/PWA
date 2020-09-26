import * as Constants from './constants';

export const setOrigin = origin => ({
  type: Constants.SET_ORIGIN,
  origin,
});

export const setDestination = destination => ({
  type: Constants.SET_DESTINATION,
  destination,
});

export const updateIsLoadingCityData = isLoadingCityData => {
  return {
    type: Constants.SET_IS_LOADING_CITY_DATA,
    isLoadingCityData,
  };
};

export const setCityData = cityData => ({
  type: Constants.SET_CITY_DATA,
  cityData,
});

export const swapStations = (origin, destination) => dispatch => {
  dispatch(setOrigin(destination));
  dispatch(setDestination(origin));
};

export const updateCitySelectorVisible = isCitySelectorVisible => ({
  type: Constants.SET_IS_CITY_SELECTOR_VISIBLE,
  isCitySelectorVisible: !isCitySelectorVisible,
});

// export const toggleHighSpeed = status => ({
//   type: 'SET_IS_HIGH_SPEED',
//   status,
// });

export const fetchCityData = () => dispatch => {
  dispatch(updateIsLoadingCityData(true));
  fetch('/rest/cities?_' + Date.now())
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(cityData => dispatch(setCityData(cityData)))
    .catch(err => console.log(err))
    .finally(() => {
      dispatch(updateIsLoadingCityData(false));
    });
};

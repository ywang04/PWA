export const SET_ORIGIN = 'SET_ORIGIN';
export const SET_DESTINATION = 'SET_DESTINATION';
export const SET_CITY_DATA = 'SET_CITY_DATA';
export const SET_IS_LOADING_CITY = 'SET_IS_LOADING_CITY';
export const SET_IS_HIGH_SPEED = 'SET_IS_HIGH_SPEED';
export const SET_DISPLAY_CITY_LIST = 'SET_DISPLAY_CITY_LIST';
export const SET_DISPLAY_DATE_SELECTION = 'SET_DISPLAY_DATE_SELECTION';

export const setOrigin = origin => ({
  type: 'SET_ORIGIN',
  origin,
});

export const setDestination = destination => ({
  type: 'SET_DESTINATION',
  destination,
});

export const setCityData = cities => ({
  type: 'SET_IS_LOADING_CITY',
  cities,
});

export const setIsLoadingCity = status => ({
  type: 'SET_IS_LOADING_CITY',
  status,
});

export const toggleHighSpeed = status => ({
  type: 'SET_IS_HIGH_SPEED',
  status,
});

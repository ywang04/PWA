import React from 'react';
import PropTypes from 'prop-types';
import CityListItem from '../CityListItem';
import * as SC from './styles';

const CityList = ({ cityData }) => {
  const cityList = cityData?.cityList?.map(cityItem => (
    <CityListItem
      key={cityItem.title}
      cities={cityItem.citys}
      title={cityItem.title}
    />
  ));
  return <SC.CityListWrapper>{cityList}</SC.CityListWrapper>;
};

CityList.propTypes = {
  cityData: PropTypes.object.isRequired,
};

export default CityList;

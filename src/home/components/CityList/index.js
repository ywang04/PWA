import React, {memo} from 'react';
import PropTypes from 'prop-types';
import CityListItem from '../CityListItem';
import * as SC from './styles';

const CityList = memo(({ cityData }) => {
  const cityList = cityData?.cityList?.map(cityItem => (
    <CityListItem
      key={cityItem.title}
      title={cityItem.title}
      cities={cityItem.citys}
    />
  ));
  return <SC.CityListWrapper>{cityList}</SC.CityListWrapper>;
});

CityList.propTypes = {
  cityData: PropTypes.object,
};

export default CityList;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as SC from './styles';

const CityListItem = ({ cities, title }) => {
  const cityListItem = cities?.map(city => (
    <SC.Item key={city.name}>{city.name}</SC.Item>
  ));
  return (
    <>
      <SC.ItemContainer>
        <SC.ItemTitle>{title}</SC.ItemTitle>
        {cityListItem}
      </SC.ItemContainer>
    </>
  );
};

CityListItem.propTypes = {
  cities: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

const actionCreators = {

};


export default connect(null, actionCreators)(CityListItem);

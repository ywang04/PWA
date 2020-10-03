import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSelectedStation } from '../../actions';
import * as SC from './styles';

const CityListItem = ({
  cities,
  title,
  isOriginSelected,
  updateSelectedStation,
  isCitySelectorVisible,
}) => {
  const cityListItem = cities?.map(city => (
    <SC.Item
      key={city.name}
      onClick={() => updateSelectedStation(city.name, isOriginSelected, isCitySelectorVisible)}
    >
      {city.name}
    </SC.Item>
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
  cities: PropTypes.array,
  title: PropTypes.string,
  isOriginSelected: PropTypes.bool,
  isCitySelectorVisible: PropTypes.bool,
};

const mapStateToProps = ({ home }) => ({
  isOriginSelected: home.isOriginSelected,
  isCitySelectorVisible: home.isCitySelectorVisible,
});

const actionCreators = {
  updateSelectedStation,
};

export default connect(mapStateToProps, actionCreators)(CityListItem);

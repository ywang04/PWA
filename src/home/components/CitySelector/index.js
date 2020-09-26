import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CitySearch from '../CitySearch';
import CityList from '../CityList';
import { updateCitySelectorVisible, fetchCityData } from '../../actions';
import * as Styles from './styles';

const CitySelector = ({
  isCitySelectorVisible,
  isLoadingCityData,
  cityData,
  updateCitySelectorVisible,
  fetchCityData,
}) => {
  useEffect(() => {
    if (!isCitySelectorVisible || cityData || isLoadingCityData) {
      return;
    }
    fetchCityData();
  }, [isCitySelectorVisible, cityData, fetchCityData, isLoadingCityData]);

  if (!isCitySelectorVisible) {
    return null;
  }
  return (
    <Styles.CitySelector>
      <CitySearch updateCitySelectorVisible={updateCitySelectorVisible} />
      <CityList cityData={cityData} />
    </Styles.CitySelector>
  );
};

CitySelector.propTypes = {
  isCitySelectorVisible: PropTypes.bool.isRequired,
  isLoadingCityData: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  updateCitySelectorVisible: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ home }) => ({
  isCitySelectorVisible: home.isCitySelectorVisible,
  isLoadingCityData: home.isLoadingCityData,
  cityData: home.cityData,
});

const actionCreators = {
  updateCitySelectorVisible,
  fetchCityData,
};

export default connect(mapStateToProps, actionCreators)(CitySelector);

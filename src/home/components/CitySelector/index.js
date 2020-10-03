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
  hasError,
  cityData,
  updateCitySelectorVisible,
  fetchCityData,
}) => {
  useEffect(() => {
    if (!isCitySelectorVisible || cityData) {
      return;
    }
    fetchCityData();
  }, [isCitySelectorVisible, cityData, fetchCityData]);

  if (!isCitySelectorVisible) {
    return null;
  }

  const CityListOutput = () => {
    if (hasError) {
      return <h1>error</h1>
    }
    if (isLoadingCityData) {
      return <div>loading...</div>;
    } 
    if (cityData) {
      return <CityList cityData={cityData} />;
    }
  };

  return (
    <Styles.CitySelector>
      <CitySearch updateCitySelectorVisible={updateCitySelectorVisible} />
      {CityListOutput()}
    </Styles.CitySelector>
  );
};

CitySelector.propTypes = {
  isCitySelectorVisible: PropTypes.bool.isRequired,
  isLoadingCityData: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  updateCitySelectorVisible: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
};

const mapStateToProps = ({ home }) => ({
  isCitySelectorVisible: home.isCitySelectorVisible,
  isLoadingCityData: home.isLoadingCityData,
  cityData: home.cityData,
  hasError: home.hasError,
});

const actionCreators = {
  updateCitySelectorVisible,
  fetchCityData,
};

export default connect(mapStateToProps, actionCreators)(CitySelector);

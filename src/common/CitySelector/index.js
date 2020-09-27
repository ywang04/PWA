import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { updateCitySelectorVisible, fetchCityData } from '../../home/actions';
import { BackIcon, BackContainer } from '../../common/Header/styles';
import * as Styles from './styles';

const CitySelector = ({
  isCitySelectorVisible,
  isLoadingCityData,
  cityData,
  updateCitySelectorVisible,
  fetchCityData,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = e => setSearchInput(e.target.value.trim());
  const handleCleanSearch = () => {
    setSearchInput('');
  };
  const handleBack = isCitySelectorVisible => () =>
    updateCitySelectorVisible(isCitySelectorVisible);

  useEffect(() => {
    (isCitySelectorVisible || isLoadingCityData) && fetchCityData(isLoadingCityData);
  }, [isCitySelectorVisible, fetchCityData, isLoadingCityData]);

  return (
    isCitySelectorVisible && (
      <Styles.CitySelector>
        <Styles.CitySearchContainer>
          <BackContainer onClick={handleBack(isCitySelectorVisible)}>
            <BackIcon>
              <polyline points={'25,13 16,21 25,29'} />
            </BackIcon>
          </BackContainer>
          <Styles.SearchInputContainer>
            <Styles.SearchInput
              value={searchInput}
              type="text"
              placeholder="城市、车站的中文或拼音"
              onChange={handleSearch}
            />
          </Styles.SearchInputContainer>
          <Styles.SearchCleanButton
            onClick={handleCleanSearch}
            className={classnames({ hidden: searchInput.length === 0 })}
          >
            &#xf063;
          </Styles.SearchCleanButton>
        </Styles.CitySearchContainer>
      </Styles.CitySelector>
    )
  );
};

CitySelector.propTypes = {
  isCitySelectorVisible: PropTypes.bool.isRequired,
  updateCitySelectorVisible: PropTypes.func,
};

const mapStateToProps = ({ home }) => {
  return {
    isCitySelectorVisible: home.isCitySelectorVisible,
    isLoadingCityData: home.isLoadingCityData,
    cityData: home.cityData,
  };
};

const actionCreators = {
  updateCitySelectorVisible,
  fetchCityData,
};

export default connect(mapStateToProps, actionCreators)(CitySelector);

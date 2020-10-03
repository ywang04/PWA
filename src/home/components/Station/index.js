import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  swapStations,
  updateCitySelectorVisible,
  updateSideSelection,
} from '../../actions';
import SwapImg from '../../images/swap.svg';
import * as Styles from './styles';

const Station = memo(
  ({
    origin,
    destination,
    swapStations,
    updateCitySelectorVisible,
    updateSideSelection,
    isCitySelectorVisible,
  }) => {
    const handleClickStation = isLeftSelected => () => {
      updateSideSelection(isLeftSelected);
      updateCitySelectorVisible(isCitySelectorVisible);
    };
    const handleSwapStation = () => swapStations(origin, destination);

    return (
      <Styles.StationWrapper>
        <Styles.StationContainer>
          <Styles.StationInput
            type="text"
            value={origin}
            name="origin"
            readOnly
            onClick={handleClickStation(true)}
          />
        </Styles.StationContainer>
        <Styles.SwapWrapper onClick={handleSwapStation}>
          <Styles.Swap src={SwapImg} alt="swap" />
        </Styles.SwapWrapper>
        <Styles.StationContainer>
          <Styles.StationInput
            type="text"
            value={destination}
            name="destination"
            className="destination"
            readOnly
            onClick={handleClickStation(false)}
          />
        </Styles.StationContainer>
      </Styles.StationWrapper>
    );
  }
);

Station.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  isCitySelectorVisible: PropTypes.bool,
  updateSideSelection: PropTypes.func,
};

const mapStateToProps = ({ home }) => {
  const { origin, destination, isCitySelectorVisible } = home;
  return {
    origin,
    destination,
    isCitySelectorVisible,
  };
};

const actionCreators = {
  swapStations,
  updateCitySelectorVisible,
  updateSideSelection,
};

export default connect(mapStateToProps, actionCreators)(Station);

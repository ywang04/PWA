import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swapStations, updateCitySelectorVisible } from '../../actions';
import SwapImg from '../../images/swap.svg';
import * as Styles from './styles';

const Station = memo(
  ({
    origin,
    destination,
    swapStations,
    updateCitySelectorVisible,
    isCitySelectorVisible,
  }) => {
    const handleClickStation = () =>
      updateCitySelectorVisible(isCitySelectorVisible);

    const handleSwapStation = () => swapStations(origin, destination);

    return (
      <Styles.StationWrapper>
        <Styles.StationContainer>
          <Styles.StationInput
            type="text"
            value={origin}
            name="origin"
            readOnly
            onClick={handleClickStation}
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
            onClick={handleClickStation}
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
};

const mapStateToProps = ({ home }) => ({
  origin: home.origin,
  destination: home.destination,
  isCitySelectorVisible: home.isCitySelectorVisible,
});

const actionCreators = {
  swapStations,
  updateCitySelectorVisible,
};

export default connect(mapStateToProps, actionCreators)(Station);

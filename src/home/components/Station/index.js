import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swapStations } from '../../actions';
import SwapImg from '../../images/swap.svg';
import * as Styles from './styles';

const Station = memo(({ origin, destination, swapStations }) => {
  console.log('test');
  // const handleClickStation = station => () => showCitySelector(station);
  const handleSwapStation = (origin, destination) => () =>
    swapStations(origin, destination);

  return (
    <Styles.StationWrapper>
      <Styles.StationContainer>
        <Styles.StationInput
          type="text"
          value={origin}
          name="origin"
          readOnly
        />
      </Styles.StationContainer>
      <Styles.SwapWrapper onClick={handleSwapStation(origin, destination)}>
        <Styles.Swap src={SwapImg} alt="swap" />
      </Styles.SwapWrapper>
      <Styles.StationContainer>
        <Styles.StationInput
          type="text"
          value={destination}
          name="destination"
          className="destination"
          readOnly
        />
      </Styles.StationContainer>
    </Styles.StationWrapper>
  );
});

Station.prototype = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

const mapStateToProps = ({ station }) => ({
  origin: station.origin,
  destination: station.destination,
});

const actionCreators = {
  swapStations,
};

export default connect(mapStateToProps, actionCreators)(Station);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SwapImg from '../../images/swap.svg';
import * as Styles from './styles';

const Station = ({ origin, destination, swap, showCitySelector }) => {
  return (
    <Styles.StationWrapper>
      <Styles.StationContainer>
        <Styles.StationInput type="text" value={origin} name="origin" readOnly />
      </Styles.StationContainer>
      <Styles.SwapWrapper>
        <Styles.Swap src={SwapImg} alt="swap" />
      </Styles.SwapWrapper>
      <Styles.StationContainer>
        <Styles.StationInput
          type="text"
          value={destination}
          name="destination"
          readOnly
        />
      </Styles.StationContainer>
    </Styles.StationWrapper>
  );
};

Station.prototype = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default Station;

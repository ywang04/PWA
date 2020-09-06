import React, { useCallback } from 'react';
import Header from '../common/Header';
import Station from './components/Station';
import DepartDate from './components/DepartDate';
import HightSpeed from './components/HighSpeed';
import SubmitButton from './components/SubmitButton';
import { connect } from 'react-redux';
import './App.css';

const App = ({ origin, destination }) => {
  const handleBack = useCallback(() => window.history.back(), []);

  return (
    <>
      <Header title="火车票" onBack={handleBack} />
      <Station origin={origin} destination={destination} />
      <DepartDate />
      <HightSpeed />
      <SubmitButton />
    </>
  );
};

const mapStateToProps = ({ station }) => {
  return {
    origin: station.origin,
    destination: station.destination,
  };
};

export default connect(
  mapStateToProps,
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);

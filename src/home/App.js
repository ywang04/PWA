import React, { useCallback } from 'react';
import Header from '../common/Header';
import Location from './components/Location';
import DepartDate from './components/DepartDate';
import HightSpeed from './components/HighSpeed';
import SubmitButton from './components/SubmitButton';
import { connect } from 'react-redux';
import './App.css';

const App = () => {
  const handleBack = useCallback(() => window.history.back(), []);

  return (
    <>
      <Header title="火车票" onBack={handleBack} />
      <Location />
      <DepartDate />
      <HightSpeed />
      <SubmitButton />
    </>
  );
};

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);

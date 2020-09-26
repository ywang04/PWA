import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import CitySelector from '../common/CitySelector';
import Station from './components/Station';
import DepartDate from './components/DepartDate';
import HighSpeed from './components/HighSpeed';
import SubmitButton from './components/SubmitButton';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const handleBack = useCallback(() => window.history.back(), []);

  return (
    <>
      <Header title="火车票" onBack={handleBack} />
      <Station />
      <CitySelector />
      <DepartDate />
      <HighSpeed />
      <SubmitButton />
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
    </>
  );
};

const mapStateToProps = ({ home }) => ({
  isCitySelectorVisible: home.isCitySelectorVisible,
});

export default connect(mapStateToProps)(App);

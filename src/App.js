import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputGrid from './InputGrid/InputGrid';
import HistoryList from './History/History';

import './App.css';


function App() {
  return (
    <section className="App">
      <InputGrid />
      <HistoryList />
    </section>
  );
}


export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputGrid from './InputGrid/InputGrid';
import History from './History/History';

import './App.css';


function App() {
  return (
    <section className="App">
      <InputGrid />
      <History />
    </section>
  );
}


export default App;

import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {

  state = {
    history: [],
    current: {
      operand1: 0,
      operand2: 0,
      operator: ' ',
      solution: 0
    }
  }

  componentDidMount(){
    this.props.dispatch({type: 'GET_HISTORY'})
  }

  render(){
    return(    
      <section className="App">

      </section>
    )
  };
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(App);
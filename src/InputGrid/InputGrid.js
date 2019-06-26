import React, {Component} from 'react';
import {connect} from 'react-redux';


class InputGrid extends Component {

  state = {
    operand1: 0,
    operand2: 0,
    operator: ' ',
    solution: 0

  }

  render(){
    return(    
      <section className="input-grid">

      </section>
    )
  };
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(InputGrid);
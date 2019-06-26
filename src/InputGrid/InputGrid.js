import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './GridButton';

class InputGrid extends Component {

  state = {
    operand1: '',
    operand2: '',
    operator: '',
    solution: ''

  }

  handleInput = (value) => {
    console.log(`input value`, value)
    if (typeof value === "string" ){
        this.identifyOperator(value)
    }
    else{
        this.identifyOperand(value)
    }
  }

  // identifies the operator in case input value is a string
  identifyOperator = (value) => {
    switch (value){
      case "clear":
        this.setState({
          operand1: '',
          operand2: '',
          operator: '',
          solution: ''
        })
        break
      case "equals":
        this.solveExpression()
        break
      default:
        this.setState({
          ...this.state,
          operator: value
        })
    }
  }

  // identifies which operand the value should be in case input value is a number
  identifyOperand = (value) => {

  }

  // attempt to solve expression if equals is pressed
  solveExpression = () => {

  }
  render(){
    console.log(`state in inputGrid`, this.state);
    
    return(    
      <section className="input-grid">
        <div clasName = 'grid-row'>
          <Button value={7} handleInput={this.handleInput}/>
          <Button value={8} handleInput={this.handleInput}/>
          <Button value={9} handleInput={this.handleInput}/>
          <Button value={'/'} handleInput={this.handleInput}/>
        </div> 

        <div clasName = 'grid-row'>
          
        </div>

        <div clasName = 'grid-row'>
          
        </div>

      </section>
    )
  };
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(InputGrid);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './GridButton';

class InputGrid extends Component {

  state = {
    operand1: '',
    operand2: '',
    operator: '',
    solution: '',
    floatTo: 0,
  }

  display = () => {

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
  
  handleDecimal = () => {

  }

  // identifies the operator in case input value is a string
  identifyOperator = (value) => {
    switch (value){
      case "C":
        this.setState({
          operand1: '',
          operand2: '',
          operator: '',
          solution: ''
        })
        break
      case "=":
        this.solveExpression()
        break
      case '.':
        this.handleDecimal()
        break
      default:
        this.setState({
          ...this.state,
          operator: value
        })
    }
  }

  // identifies which operand the value should be in case input value is a number
  // if an operator has been chosen then operand2 should be filled
  identifyOperand = (value) => {
    if(this.state.operator){
      this.setState({
        ...this.state,
        operand2: this.state.operand2 + value
      })
    }
    else{
      this.setState({
        ...this.state,
        operand1: this.state.operand1 + value
      })
    }
  }

  // attempt to solve expression if input is '='
  solveExpression = () => {

  }

  render(){
    console.log(`state in inputGrid`, this.state);
    
    return(    
      <section className="input-grid">
        <div className='header-row'>
          <p>{this.state.operand1 + ' ' + this.state.operator + ' '+ this.state.operand2}</p>
          <Button value={'C'} handleInput={this.handleInput}/>
        </div>

        <div clasName = 'grid-row'>
          <Button value={7} handleInput={this.handleInput}/>
          <Button value={8} handleInput={this.handleInput}/>
          <Button value={9} handleInput={this.handleInput}/>
          <Button value={'/'} handleInput={this.handleInput}/>
        </div> 

        <div clasName = 'grid-row'>
          <Button value={4} handleInput={this.handleInput}/>
          <Button value={5} handleInput={this.handleInput}/>
          <Button value={6} handleInput={this.handleInput}/>
          <Button value={'x'} handleInput={this.handleInput}/>
        </div>

        <div clasName = 'grid-row'>
          <Button value={1} handleInput={this.handleInput}/>
          <Button value={2} handleInput={this.handleInput}/>
          <Button value={3} handleInput={this.handleInput}/>
          <Button value={'-'} handleInput={this.handleInput}/>
        </div>
        <div clasName = 'grid-row'>
          <Button value={0} handleInput={this.handleInput}/>
          <Button value={'.'} handleInput={this.handleInput}/>
          <Button value={'='} handleInput={this.handleInput}/>
          <Button value={'+'} handleInput={this.handleInput}/>
        </div>
      </section>
    )
  };
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(InputGrid);
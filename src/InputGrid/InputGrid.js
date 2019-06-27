/* eslint-disable default-case */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './GridButton';

class InputGrid extends Component {

  state = {
    operand1: '',
    operand2: '',
    operator: '',
    solution: '',
  }

  // Decides if to treat input value as operand or operator based on typeof number or string
  handleInput = (value) => {
  
    if (typeof value === "string" ){
        this.identifyOperator(value);
    }
    else{
        this.identifyOperand(String(value));
    }
  };
  
  // identifies the operator if input value is a string
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
        this.attemptExpression()
        break
      case '.':
        // a decimal is both a string and part of the operand
        this.identifyOperand(value)
        break
      default:
        this.setState({
          ...this.state,
          operator: value
        })
    }
  }

  // identifies which operand the value should be if input value is a number
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
  // alert user if any input is empty
  attemptExpression = () => {
    if(this.state.operand1 === '' || this.state.operator === '' || this.state.operand2 === ''){
      alert('Sorry, please enter two numbers and an operator');
    }
    else{
      this.solveExpression()
    }

  }

  // rounds the second decimal place because toFixed isn't good enough
  roundToTwoDecimals = (solution) => {
    // cut the solution to a string with 3 decimals and turn it into a number with 1 decimal by multiplying by 100
    let x = Number(solution.toFixed(3)) * 100;
    // round the one decimal number and bring it to a number with 2 decimals by dividing by 100
    let y = Math.round(x) / 100
    return y
  }

  // solve expression after solving attempt is passed in attemptSolution
  // convert operands back to number, perform operation, dispatch to server, clear state
  solveExpression = () => {
    let operand1 = Number(this.state.operand1);
    let operand2 = Number(this.state.operand2);
    let solution = '';

    switch (this.state.operator){
      case '+':
        solution = operand1 + operand2        
        solution = this.roundToTwoDecimals(solution);
        break
      case'-':
        solution = operand1 - operand2
        solution = this.roundToTwoDecimals(solution);
        break
      case'/':
        solution = operand1 / operand2
        solution = this.roundToTwoDecimals(solution);
        break
      case 'x':
        solution = operand1 * operand2
        solution = this.roundToTwoDecimals(solution);
        break
    }

    this.props.dispatch({
      type: "POST_EXPRESSION",
      payload: {...this.state, solution,}
    })

    this.setState({
      operand1: '',
      operand2: '',
      operator: '',
      solution: ''
    })
  }

  render(){
    console.log(`state in inputGrid`, this.state);
    
    return(    
      <section className='input-grid'>
        <div className='header-row'>
          <div className = ''>
            <p>{this.state.operand1 + ' ' + this.state.operator + ' ' + this.state.operand2}</p>
          </div>
          <Button value={'C'} handleInput={this.handleInput}/>
        </div>

        <div className = 'grid-row'>
          <Button value={7} handleInput={this.handleInput}/>
          <Button value={8} handleInput={this.handleInput}/>
          <Button value={9} handleInput={this.handleInput}/>
          <Button value={'/'} handleInput={this.handleInput}/>
        </div> 

        <div className = 'grid-row'>
          <Button value={4} handleInput={this.handleInput}/>
          <Button value={5} handleInput={this.handleInput}/>
          <Button value={6} handleInput={this.handleInput}/>
          <Button value={'x'} handleInput={this.handleInput}/>
        </div>

        <div className = 'grid-row'>
          <Button value={1} handleInput={this.handleInput}/>
          <Button value={2} handleInput={this.handleInput}/>
          <Button value={3} handleInput={this.handleInput}/>
          <Button value={'-'} handleInput={this.handleInput}/>
        </div>
        <div className = 'grid-row'>
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
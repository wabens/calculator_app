import React, {Component} from 'react';
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


  render(){
    return(    
      <section className="App">

      </section>
    )
  };
}

export default App;

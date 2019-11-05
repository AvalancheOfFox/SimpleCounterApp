import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {

  state = {
    count: 0
  }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () =>{
    this.setState({
      count: this.state.count - 1
    })
  }
  reset = () =>{
    this.setState({
      count: 0
    })
  }
  

  render(){

  return (
    <div>
    <div className="main">
      <button id="increment" onClick={this.increment}>Increment</button>
      <button id="decrement" onClick={this.decrement}>Decrement</button>
      <button id="reset" onClick={this.reset}>Reset</button>

      <h1>The Count is: {this.state.count}</h1>
      
    </div>
    </div>
  );
}
}

export default Counter;

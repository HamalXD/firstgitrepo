import React, { Component } from 'react'
import Child from './child';

export default class TimerCounterApp extends Component {
    constructor(props) {;
    super(props);
    this.state = {
        countDown: 0,
    }
    }

    increment = () => {
        this.interval = setInterval (() => {
            this.setState((prevState) => ({
                countDown: prevState.countDown + 1,
            }));
        }, 1000);
    }

    decrement =  () => {
        this.interval = setInterval (() => {
            this.setState((prevState) => ({
                countDown: prevState.countDown - 1,
            }));
        }, 1000);
    }

    startIncrement = () => {
        clearInterval (this.interval)
        this.increment();
    };
    
    startDecrement = () => {
        clearInterval (this.interval)
        this.decrement();
    };

    stopCountDown = () => {
        clearInterval(this.interval);
    }

  render() {
    return (
      <>
      <p><Child countDown={this.state.countDown}/></p>
        <button onClick={this.startIncrement}>Increment</button>
        <button onClick={this.startDecrement}>Decrement</button>
        <button onClick={this.stopCountDown}>Stop</button>
         {/* <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Increment</button>
         <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>Reset</button> */}
      </>
    )
  }
}

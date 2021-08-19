import React, { Component } from "react";
import CounterButton from "./CounterButton";
import "../css/Counter.css";
import ResetButton from "./ResetButton";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counterButtons">
        <CounterButton
          by={1}
          increment={this.increment}
          decrement={this.decrement}
        ></CounterButton>

        <CounterButton
          by={5}
          increment={this.increment}
          decrement={this.decrement}
        ></CounterButton>

        <CounterButton
          by={10}
          increment={this.increment}
          decrement={this.decrement}
        ></CounterButton>
        <span className="index">{this.state.counter}</span>
        <ResetButton reset={this.reset}></ResetButton>
      </div>
    );
  }

  increment(by) {
    this.setState({
      counter: this.state.counter + by,
    });
  }

  decrement(by) {
    this.setState({
      counter: this.state.counter - by,
    });
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }
}
export default Counter;

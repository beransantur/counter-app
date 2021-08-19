import React, { Component } from "react";
import "../css/CounterButton.css";

class CounterButton extends Component {
  render() {
    return (
      <div>
        <button
          className="button"
          onClick={() => this.props.increment(this.props.by)}
        >
          {this.props.by}
        </button>

        <button
          className="button"
          onClick={() => this.props.decrement(this.props.by)}
        >
          -{this.props.by}
        </button>
      </div>
    );
  }
}
export default CounterButton;

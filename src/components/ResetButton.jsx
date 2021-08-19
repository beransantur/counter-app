import React, { Component } from "react";
import "../css/ResetButton.css";

class ResetButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.reset} className="resetButton">
          RESET
        </button>
      </div>
    );
  }
}
export default ResetButton;

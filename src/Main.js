import React, { Component } from "react";
import App from "./App";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };

  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  reset = () => {
    this.setState({ number: 0 });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <h1>React Counter</h1>
          <h1>{this.state.number}</h1>
          <button className="btn btn-success" onClick={this.increase}>
            Increase
          </button>
          <button className="btn btn-danger" onClick={this.decrease}>
            Decrease
          </button>
          <button className="btn btn-secondary" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Main;

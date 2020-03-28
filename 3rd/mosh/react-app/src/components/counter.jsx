import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  constructor() {
    super();
    //https://medium.com/free-code-camp/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    this.popup = this.popup.bind(this, 20);
  }

  popup(e) {
    console.log(e);
  }

  handleClick = param => e => {
    console.log("Event", e);
    console.log("Parameter", param);
  };

  /*
  popup = e => {
    console.log(e);
  };
  */

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  //https://medium.com/free-code-camp/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button onClick={this.popup} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={this.handleClick("306")}>
          Property initializer syntax
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

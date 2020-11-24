import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    countIncrement: 30,
    countDecrement: 30
  };

   incCounter= () => {
    this.setState(prevState => ({
      countIncrement: prevState.countIncrement + 1,
      countDecrement: prevState.countDecrement -1
    }));
  };

  decCounter= () => {
    this.setState(prevState => ({
      countDecrement: prevState.countDecrement -1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.incCounter}>{this.state.countIncrement}</button>
        <button onClick={this.decCounter}>{this.state.countDecrement}</button>
      </div>
    );
  }
}

export default App;

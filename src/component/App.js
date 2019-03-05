import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

class App extends React.Component {
  // const app = props => {
  state = {
    total: null,
    next: null,
    operation: null
  };
  // const [memo, setMemo] = useState({
  //   total: null,
  //   next: null,
  //   operation: null
  // });

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
    // setMemo(calculate(memo, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;

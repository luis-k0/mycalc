import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

// class App extends React.Component {
const app = props => {
  // state = {
  //   total: null,
  //   next: null,
  //   operation: null
  // };
  const [memo, setMemo] = useState({
    total: null,
    next: null,
    operation: null
  });

  const handleClick = buttonName => {
    // this.setState(calculate(this.state, buttonName));
    // console.log("memo before", memo);
    setMemo({ ...memo, ...calculate(memo, buttonName) });
    // console.log("memo after", memo);
  };

  // render() {
  return (
    <div className="component-app">
      <Display value={memo.next || memo.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
  // }
};
export default app;

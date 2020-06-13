import React, { useState } from "react";
import "./App.css";

function StateApp() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const IncrementCountAndToggleClass = () => {
    setCount(count + 1);
    setRed(!isRed);
  };
  return (
    <div className="state-app">
      <h1 className={isRed ? "red" : ""}>Hey there</h1>
      <button onClick={IncrementCountAndToggleClass}>Click me</button>
      <h1>{count}</h1>
    </div>
  );
}

export default StateApp;

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Grid, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App ">
      <div className="calc-row">
        <h1>Calculator</h1>
      </div>
      <div className="calc-row">
        <textarea>0</textarea>
      </div>

      <div className="calc-row">
        <button className="wide">CE</button>
        <button className="wide">C</button>
        <button className="operator">/</button>
      </div>

      <div className="calc-row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator">*</button>
      </div>

      <div className="calc-row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className={"operator"}>+</button>
      </div>

      <div className="calc-row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="operator">-</button>
      </div>

      <div className="calc-row">
        <button className="wide">0</button>
        <button className="wide">.</button>
        <button className="operator">=</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";

import Solver from "./utils/Solver";
import Generator from "./utils/Generator";

import Board from "./components/Board/Board";

import "./body.css";
import styled from "./App.module.css";

class App extends React.Component<{}> {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;

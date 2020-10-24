import React from "react";

import Solver from "./utils/Solver";
import Generator from "./utils/Generator";

import Board from "./components/Board/Board";

import "./body.css";
import styled from "./App.module.css";

class App extends React.Component<{}> {
  componentDidMount() {
    let pz = new Solver(15, [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [15, 10, 11, 12],
      [13, 0, 9, 14],
    ]);
    console.log(pz.AStar());
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;

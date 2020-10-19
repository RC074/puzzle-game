import React from "react";

import Solver from "./utils/Solver";

class App extends React.Component<{}> {
  componentDidMount() {
    let pz = new Solver(
      15,
      [
        [1, 3, 2, 4],
        [9, 8, 5, 11],
        [13, 14, 0, 6],
        [10, 7, 15, 12],
      ],
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0],
      ]
    );
    console.log(pz.AStar());
  }

  render() {
    return <div></div>;
  }
}

export default App;

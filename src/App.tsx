import React from "react";

import Solver from "./utils/Solver";
import Generator from "./utils/Generator";

import Board from "./components/Board/Board";
import Records from "./components/Records/Records";
import Functions from "./components/Functions/Functions";

import "./body.css";
import "./toggle.css";
import styled from "./App.module.css";

interface AppState {
  board: number[][];
  isPlaying: boolean;
  isInitial: boolean;
  showPanel: boolean;
  bodyColor: boolean;
  solvedByPlayer: boolean;
  timeList: number[];
}

class App extends React.Component<{}, AppState> {
  state = {
    board: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ],
    isPlaying: false,
    isInitial: true,
    showPanel: false,
    bodyColor: false,
    timeList: [],
    solvedByPlayer: false,
  };

  restart = () => {
    this.toggleInitialState(false);
  };

  appendToTimeList = (time: number) => {
    console.log(this.state.solvedByPlayer);
    if (this.state.solvedByPlayer) {
      let temp: number[] = [...this.state.timeList];
      temp.push(time);
      this.setState({ timeList: temp });
      this.setState({ solvedByPlayer: false });
    }
  };

  toggleInitialState = (bool: boolean) => {
    if (bool) {
      let new_pz = new Generator(8).make();
      this.setState({ board: new_pz });
    }
    this.setState({ isInitial: !this.state.isInitial });
    this.togglePanel(bool);
  };

  togglePanel = (bool: boolean) => {
    this.setState({ showPanel: bool });
  };

  toggleSolvedByPlayer = (bool: boolean) => {
    this.setState({ solvedByPlayer: bool });
  };

  toggleBodyColor = () => {
    this.setState({ bodyColor: !this.state.bodyColor });
    document.body.style.background = this.state.bodyColor ? "#cacdd4" : "#27282a";
  };

  handleSwapTiles = (col: number, row: number, col2: number, row2: number) => {
    let tempBoard = this.state.board;
    [tempBoard[col][row], tempBoard[col2][row2]] = [tempBoard[col2][row2], tempBoard[col][row]];
    this.setState({ board: tempBoard });
  };

  handleSolve = () => {
    this.setState({ isPlaying: true });
  };

  handleFinishedSolving = () => {
    this.setState({ isPlaying: false });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.isInitial ? (
            <button className={styled.start} onClick={() => this.toggleInitialState(true)}>
              START
            </button>
          ) : (
            ""
          )}
          <Records timeList={this.state.timeList} />
          <Functions
            showPanel={this.state.showPanel}
            isSolving={this.handleSolve}
            restart={this.restart}
            appendTime={(time) => this.appendToTimeList(time)}
          />
          <Board
            board={this.state.board}
            swap={(col, row, col2, row2) => this.handleSwapTiles(col, row, col2, row2)}
            isPlaying={this.state.isPlaying}
            showPanel={(bool) => this.togglePanel(bool)}
            toggleInitialState={(bool) => this.toggleInitialState(bool)}
            finishedSolving={this.handleFinishedSolving}
            solvedByPlayer={(bool) => this.toggleSolvedByPlayer(bool)}
          />
        </div>
        <div className="toggle-wrapper">
          <input
            id="provideMuffins"
            name="provideMuffins"
            className="toggle"
            type="checkbox"
            onChange={this.toggleBodyColor}
          />
          <label htmlFor="provideMuffins" className="toggle--label"></label>
          <div className="foux-toggle"></div>
        </div>
      </div>
    );
  }
}

export default App;

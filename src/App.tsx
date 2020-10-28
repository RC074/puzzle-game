import React from "react";

import Solver from "./utils/Solver";
import Generator from "./utils/Generator";

import Board from "./components/Board/Board";
import Records from "./components/Records/Records";
import Functions from './components/Functions/Functions';

import "./body.css";
import styled from "./App.module.css";

interface AppState {
  board: number[][];
  isPlaying: boolean;
  isSolving: boolean;
}

class App extends React.Component<{}, AppState> {
  state = {
    board: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    isPlaying: false,
    isSolving: false,
  }

  componentDidMount() {
    let new_pz = new Generator(8).make()
    this.setState({board: new_pz})
  }

  togglePlayingState = () => {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  handleSwapTiles = (col : number, row : number, col2 : number, row2 : number) => {
    let tempBoard = this.state.board;
    [tempBoard[col][row], tempBoard[col2][row2]] = [tempBoard[col2][row2], tempBoard[col][row]];
    this.setState({board: tempBoard});
  }

  handleSolve = () => {
    this.setState({isSolving: true});
  }
  
  render() {
    return (
      <div>
        {!this.state.isPlaying ? <button className={styled.start} onClick={this.togglePlayingState} >START</button> : ''}
        <Records />
        <Functions 
          isPlaying={this.state.isPlaying}
          isSolving={this.handleSolve}
        />
        <Board 
          board={this.state.board} 
          swap={(col, row, col2, row2) => this.handleSwapTiles(col, row, col2, row2)}
          isSolving={this.state.isSolving}
        />
      </div>
    );
  }
}

export default App;

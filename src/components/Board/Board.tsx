import React, { useState, useEffect, useCallback } from "react";
import CSS from "csstype";

import Solver from "../../utils/Solver";
import Generator from "../../utils/Generator";
import Puzzle from "../../utils/Puzzle";

import styled from "./Board.module.css";

type BoardProps = {
  board: number[][];
  swap: (col: number, row: number, col2: number, row2: number) => void;
  isPlaying: boolean;
  showPanel: (bool: boolean) => void;
  finishedSolving: () => void;
  toggleInitialState: (bool: boolean) => void;
  solvedByPlayer: (bool: boolean) => void;
};

const timeOut = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Board: React.FC<BoardProps> = ({
  board,
  swap,
  isPlaying,
  showPanel,
  finishedSolving,
  toggleInitialState,
  solvedByPlayer,
}) => {
  const [isClickable, setIsClickable] = useState(true);
  const [inSolvingProcess, setInSolvingProcess] = useState(false);

  const [tileStyle, setTileStyle] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const commandsLoader = useCallback(
    async (sequence: string) => {
      for (let i = 0; i < sequence.length; i++) {
        let [y, x] = findTile(0);
        if (sequence[i] === "u") y--;
        if (sequence[i] === "d") y++;
        if (sequence[i] === "r") x++;
        if (sequence[i] === "l") x--;
        handleTileClick(y, x, false);
        await timeOut(500);
      }
      finishedSolving();
      setInSolvingProcess(false);
    },
    [board]
  );

  useEffect(() => {
    if (isPlaying && !inSolvingProcess) {
      let pz = new Solver(8, board);
      commandsLoader(pz.AStar());
      setInSolvingProcess(true);
      showPanel(false);
    }
  }, [isPlaying, inSolvingProcess, showPanel, commandsLoader, board]);

  const swapTiles = (col: number, row: number, col2: number, row2: number) => {
    swap(col, row, col2, row2);
  };

  const findTile = (tile: number) => {
    let tempBoard = new Puzzle(8, board);
    return tempBoard.findTile(tile, board);
  };

  const isSwappable = (col: number, row: number) => {
    let [y, x] = findTile(0);
    if (y === col && Math.abs(x - row) === 1) return true;
    if (x === row && Math.abs(y - col) === 1) return true;
    return false;
  };

  const getStyle = (n: number) => {
    interface Dict {
      [key: string]: string;
    }
    let styles: Dict = {};
    if (tileStyle[n] === 0) {
      styles = { left: "0vw", right: "0vw", top: "0vw", bottom: "0vw" };
    }
    if (tileStyle[n] === 3) {
      styles = { bottom: "9.3vw", transition: "bottom 0.5s" };
    }
    if (tileStyle[n] === 4) {
      styles = { top: "9.3vw", transition: "top 0.5s" };
    }
    if (tileStyle[n] === 2) {
      styles = { right: "9.3vw", transition: "right 0.5s" };
    }
    if (tileStyle[n] === 1) {
      styles = { left: "9.3vw", transition: "left 0.5s" };
    }
    if (n === 0) {
      styles["background"] = "transparent";
    }
    return styles;
  };

  const handleTileClick = (col: number, row: number, player: boolean) => {
    if (!isClickable) return;
    if (isSwappable(col, row)) {
      let [y, x] = findTile(0);
      let tempTileStyle = [...tileStyle];

      if (y === col && x > row) {
        tempTileStyle[0] = 2;
        tempTileStyle[board[col][row]] = 1;
      }
      if (y === col && x < row) {
        tempTileStyle[0] = 1;
        tempTileStyle[board[col][row]] = 2;
      }
      if (x === row && y > col) {
        tempTileStyle[0] = 3;
        tempTileStyle[board[col][row]] = 4;
      }
      if (x === row && y < col) {
        tempTileStyle[0] = 4;
        tempTileStyle[board[col][row]] = 3;
      }

      setTileStyle([...tempTileStyle]);
      setIsClickable(false);
      setTimeout(() => {
        setTileStyle([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        swapTiles(col, row, y, x);
        if (
          JSON.stringify(board) ===
          JSON.stringify([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 0],
          ])
        ) {
          if (player) solvedByPlayer(true);
          toggleInitialState(false);
        }
        setIsClickable(true);
      }, 500);
    }
  };

  return (
    <div className={styled.board}>
      <ul className={styled.rows}>
        <li className={styled.tiles} style={getStyle(board[0][0])} onClick={() => handleTileClick(0, 0, true)}>
          {board[0][0] === 0 ? "" : board[0][0]}
        </li>
        <li className={styled.tiles} style={getStyle(board[0][1])} onClick={() => handleTileClick(0, 1, true)}>
          {board[0][1] === 0 ? "" : board[0][1]}
        </li>
        <li className={styled.tiles} style={getStyle(board[0][2])} onClick={() => handleTileClick(0, 2, true)}>
          {board[0][2] === 0 ? "" : board[0][2]}
        </li>
        <li className={styled.tiles} style={getStyle(board[1][0])} onClick={() => handleTileClick(1, 0, true)}>
          {board[1][0] === 0 ? "" : board[1][0]}
        </li>
        <li className={styled.tiles} style={getStyle(board[1][1])} onClick={() => handleTileClick(1, 1, true)}>
          {board[1][1] === 0 ? "" : board[1][1]}
        </li>
        <li className={styled.tiles} style={getStyle(board[1][2])} onClick={() => handleTileClick(1, 2, true)}>
          {board[1][2] === 0 ? "" : board[1][2]}
        </li>
        <li className={styled.tiles} style={getStyle(board[2][0])} onClick={() => handleTileClick(2, 0, true)}>
          {board[2][0] === 0 ? "" : board[2][0]}
        </li>
        <li className={styled.tiles} style={getStyle(board[2][1])} onClick={() => handleTileClick(2, 1, true)}>
          {board[2][1] === 0 ? "" : board[2][1]}
        </li>
        <li className={styled.tiles} style={getStyle(board[2][2])} onClick={() => handleTileClick(2, 2, true)}>
          {board[2][2] === 0 ? "" : board[2][2]}
        </li>
      </ul>
    </div>
  );
};

export default Board;

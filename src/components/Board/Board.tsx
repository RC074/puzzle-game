import React from "react";

import styled from "./Board.module.css";

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  return (
    <div className={styled.board}>
      <ul className={styled.rows}>
        <li className={styled.tiles}>1</li>
        <li className={styled.tiles}>2</li>
        <li className={styled.tiles}>3</li>
        <li className={styled.tiles}>4</li>
        <li className={styled.tiles}>5</li>
        <li className={styled.tiles}>6</li>
        <li className={styled.tiles}>7</li>
        <li className={styled.tiles}>8</li>
        <li className={styled.tiles}></li>
      </ul>
    </div>
  );
};

export default Board;

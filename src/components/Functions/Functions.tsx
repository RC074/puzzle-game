import React, { useState, useEffect } from "react";

import styled from "./Functions.module.css";

interface FunctionsProps {
  showPanel: boolean;
  isSolving: () => void;
  restart: () => void;
}

const timeOut = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Functions: React.FC<FunctionsProps> = ({ showPanel, isSolving, restart }) => {
  const [btnVisibility, setBtnVisibility] = useState(false);
  const [menuWidth, setMenuWidth] = useState(false);

  useEffect(() => {
    const toggleVisibility = async () => {
      if (showPanel === true) {
        await timeOut(300);
      }
      setBtnVisibility(showPanel ? true : false);
    };
    const toggleMenuWidth = async () => {
      if (showPanel !== true) {
        await timeOut(500);
      }
      setMenuWidth(showPanel ? true : false);
    };
    toggleVisibility();
    toggleMenuWidth();
  });

  const handleSolve = () => {
    isSolving();
  };

  const handleRestart = () => {
    restart();
  };

  return (
    <div className={styled.container} style={{ width: menuWidth ? "12vw" : "0" }}>
      <button className={styled.btn} onClick={handleSolve} style={{ visibility: btnVisibility ? "visible" : "hidden" }}>
        Solve
      </button>
      <button
        className={styled.btn}
        onClick={handleRestart}
        style={{ visibility: btnVisibility ? "visible" : "hidden" }}>
        Restart
      </button>
    </div>
  );
};

export default Functions;

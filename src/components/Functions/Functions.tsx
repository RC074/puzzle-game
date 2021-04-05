import React, { useState, useEffect } from "react";

import styled from "./Functions.module.css";

interface FunctionsProps {
  showPanel: boolean;
  isSolving: () => void;
  restart: () => void;
  appendTime: (time: number) => void;
}

const timeOut = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Functions: React.FC<FunctionsProps> = ({
  showPanel,
  isSolving,
  restart,
  appendTime,
}) => {
  const [timerInterval, setTimerInterval] = useState<any>();
  const [timerTime, setTimerTime] = useState(0);
  const [btnVisibility, setBtnVisibility] = useState(false);
  const [menuWidth, setMenuWidth] = useState(false);
  const [clickable, setClickable] = useState(true);

  useEffect(() => {
    const toggleVisibility = async () => {
      setClickable(false);
      if (showPanel === true) {
        startTimer();
        await timeOut(300);
      } else {
        appendTime(timerTime);
        setTimerTime(0);
        clearInterval(timerInterval);
      }
      setBtnVisibility(showPanel ? true : false);
      setClickable(true);
    };
    const toggleMenuWidth = async () => {
      setClickable(false);
      setMenuWidth(showPanel ? true : false);
      setClickable(true);
    };
    if (clickable) {
      toggleVisibility();
      toggleMenuWidth();
    }
  }, [showPanel]);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimerTime((timerTime) => timerTime + 1000);
    }, 1000);
    setTimerInterval(interval);
  };

  const timer = () => {
    if (timerTime === 3599000) {
      clearInterval(timerInterval);
    }
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return minutes + ":" + seconds;
  };

  const handleSolve = () => {
    isSolving();
  };

  const handleRestart = () => {
    restart();
  };

  return (
    <div
      className={styled.container}
      style={{ width: menuWidth ? "12vw" : "0" }}
    >
      <div
        className={styled.timer}
        style={{ visibility: btnVisibility ? "visible" : "hidden" }}
      >
        {timer()}
      </div>
      <button
        className={styled.btn}
        onClick={handleSolve}
        style={{ visibility: btnVisibility ? "visible" : "hidden" }}
      >
        Solve
      </button>
      <button
        className={styled.btn}
        onClick={handleRestart}
        style={{ visibility: btnVisibility ? "visible" : "hidden" }}
      >
        Restart
      </button>
    </div>
  );
};

export default Functions;

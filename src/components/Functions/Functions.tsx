import React, { useState, useEffect } from 'react'

import styled from './Functions.module.css'

interface FunctionsProps {
  isPlaying: boolean;
  isSolving: () => void;
}

const timeOut = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Functions: React.FC<FunctionsProps> = ({isPlaying, isSolving}) => {

  const [btnVisibility, setBtnVisibility] = useState(false);
  const [menuWidth, setMenuWidth] = useState(false);

  useEffect(() => {
    const toggleVisibility = async () => {
      if (isPlaying === true) {
        await timeOut(300);
      }
      setBtnVisibility(isPlaying ? true : false);
    }
    const toggleMenuWidth = async () => {
      if (isPlaying !== true) {
        await timeOut(500);
      }
      setMenuWidth(isPlaying ? true : false);
    }
    toggleVisibility();
    toggleMenuWidth();
  })

  const handleSolve = () => {
    isSolving();
  }

  return (
    <div className={styled.container} style={{width: menuWidth ? '12vw' : '0'}}>
      <button className={styled.btn} onClick={handleSolve} style={{visibility: btnVisibility ? 'visible' : 'hidden'}}>Solve</button>
      <button className={styled.btn} style={{visibility: btnVisibility ? 'visible' : 'hidden'}}>Restart</button>
    </div>
  )
}

export default Functions;
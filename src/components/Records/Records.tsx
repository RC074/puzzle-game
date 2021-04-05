import { time } from "console";
import React, { useState } from "react";

import styled from "./Records.module.css";

interface RecordsProps {
  timeList: number[];
}

const formatTime = (ms: number) => {
  let seconds = ("0" + (Math.floor(ms / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(ms / 60000) % 60)).slice(-2);
  return minutes + ":" + seconds;
};

const Records: React.FC<RecordsProps> = ({ timeList }) => {
  const DisplayRecords = () => {
    timeList.sort();
    const sortedTimeList = timeList.map((val, i) => (
      <div key={i} className={styled.record}>
        {formatTime(val)}
      </div>
    ));
    return <div>{sortedTimeList}</div>;
  };

  return (
    <div className={styled.container}>
      <div className={styled.display}>
        <div className={styled.title}>Records</div>
        <DisplayRecords />
      </div>
    </div>
  );
};

export default Records;

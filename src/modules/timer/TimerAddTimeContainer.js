import React from "react";
import { useTimers } from "./context/TimersContext";
import { dispatchAddTime } from "./context/TimersReducer";
import TimerAddTime from "./TimerAddTime";

export default function TimerAddTimeContainer() {
  const [isOpened, setIsOpened] = React.useState(false);
  const [{ selectedTimer }, dispatch] = useTimers();

  const handleClickAddTime = (timeToAdd) => {
    dispatchAddTime(dispatch, selectedTimer, timeToAdd);
  };

  return (
    <TimerAddTime
      onClick={() => {
        setIsOpened((v) => !v);
      }}
      onClickAddTime={handleClickAddTime}
      isOpened={isOpened}
    />
  );
}

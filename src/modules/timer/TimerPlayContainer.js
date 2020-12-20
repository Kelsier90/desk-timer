import React from "react";
import { timerStatus, useTimers } from "./context/TimersContext";
import { dispatchPauseTimer, dispatchRunTimer } from "./context/TimersReducer";
import TimerPlay from "./TimerPlay";

export default function TimerPlayContainer() {
  const [{ timers, selectedTimer }, dispatch] = useTimers();
  const t = timers[selectedTimer];
  const isRunning = t.status === timerStatus.running;
  const isDisabled = t.time === 0 || t.status === timerStatus.finished;

  const handleClick = React.useCallback(() => {
    if (isRunning) dispatchPauseTimer(dispatch, selectedTimer);
    else dispatchRunTimer(dispatch, selectedTimer);
  }, [dispatch, isRunning, selectedTimer]);

  React.useEffect(() => {
    const listener = (ev) => {
      if (!isDisabled && ev.target === document.body && ev.key === " ") {
        handleClick();
      }
    };

    document.addEventListener("keypress", listener);
    return () => document.removeEventListener("keypress", listener);
  }, [handleClick, isDisabled]);

  return (
    <TimerPlay
      isRunning={isRunning}
      disabled={isDisabled}
      onClick={handleClick}
    />
  );
}

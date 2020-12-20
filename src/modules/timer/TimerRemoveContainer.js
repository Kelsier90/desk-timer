import React from "react";
import { useTimers } from "./context/TimersContext";
import { dispatchRemoveTimer } from "./context/TimersReducer";
import TimerRemove from "./TimerRemove";

export default function TimerRemoveContainer() {
  const [{ timers, selectedTimer }, dispatch] = useTimers();

  const handleClick = () => {
    dispatchRemoveTimer(dispatch, selectedTimer);
  };

  return <TimerRemove onClick={handleClick} disabled={timers.length === 1} />;
}

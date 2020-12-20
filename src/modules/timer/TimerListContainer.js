import React from "react";
import { useTimers } from "./context/TimersContext";
import TimerList from "./TimerList";

export default function TimerListContainer() {
  const [{ timers, selectedTimer }] = useTimers();

  return <TimerList timers={timers} selectedTimer={selectedTimer} />;
}

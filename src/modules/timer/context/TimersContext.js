import React from "react";
import { DEFAULT_TIMER_TIME } from "../utils/constants";
import TimersStorage from "../utils/TimersStorage";
import { timersReducer } from "./TimersReducer";

const TimersContext = React.createContext();

export const timerStatus = {
  idle: 0,
  running: 1,
  paused: 2,
  finished: 3,
};

const timersStorage = new TimersStorage();

const initialState = timersStorage.getAll() || {
  timers: [
    {
      id: Date.now(),
      label: "",
      time: DEFAULT_TIMER_TIME,
      status: timerStatus.idle,
    },
  ],
  selectedTimer: 0,
};

export function TimersContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(timersReducer, initialState);

  return (
    <TimersContext.Provider value={[state, dispatch]}>
      {children}
    </TimersContext.Provider>
  );
}

TimersContextProvider.displayName = "TimersContextProvider";

export function useTimers() {
  return React.useContext(TimersContext);
}

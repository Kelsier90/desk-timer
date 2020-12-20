import React from "react";
import { useTimers } from "./context/TimersContext";
import { dispatchSelectTimer } from "./context/TimersReducer";
import TimerSelector from "./TimerSelector";

export default function TimerSelectorContainer() {
  const [{ timers, selectedTimer }, dispatch] = useTimers();

  const handleSelectTimer = React.useCallback(
    (i) => {
      dispatchSelectTimer(dispatch, i);
    },
    [dispatch]
  );

  React.useEffect(() => {
    const listener = (ev) => {
      if (ev.target !== document.body) return;
      if (ev.key === "ArrowUp" && selectedTimer !== 0) {
        handleSelectTimer(selectedTimer - 1);
      } else if (ev.key === "ArrowDown" && selectedTimer + 1 < timers.length) {
        handleSelectTimer(selectedTimer + 1);
      }
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [handleSelectTimer, selectedTimer, timers.length]);

  return (
    <TimerSelector
      timers={timers}
      selectedTimer={selectedTimer}
      onSelectTimer={handleSelectTimer}
    />
  );
}

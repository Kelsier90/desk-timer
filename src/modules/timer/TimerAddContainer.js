import React from "react";
import RoundButton from "../../shared/components/RoundButton";
import { useTimers } from "./context/TimersContext";
import {
  dispatchCreateTimer,
  dispatchSelectTimer,
} from "./context/TimersReducer";
import { MAX_TIMERS_LENGTH } from "./utils/constants";

function TimerAddContainer() {
  const [{ timers }, dispatch] = useTimers();
  const isDisabled = timers.length === MAX_TIMERS_LENGTH;

  const handleClick = React.useCallback(() => {
    dispatchCreateTimer(dispatch);
    dispatchSelectTimer(dispatch, timers.length);
  }, [dispatch, timers.length]);

  React.useEffect(() => {
    const listener = (ev) => {
      if (!isDisabled && ev.target === document.body && ev.key === "n") {
        handleClick();
      }
    };

    document.addEventListener("keypress", listener);
    return () => document.removeEventListener("keypress", listener);
  }, [handleClick, isDisabled]);

  return (
    <div style={{ textAlign: "right" }}>
      <RoundButton size="large" onClick={handleClick} disabled={isDisabled}>
        +
      </RoundButton>
    </div>
  );
}

export default TimerAddContainer;

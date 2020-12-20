import React from "react";
import PropTypes from "prop-types";
import TimerProgress from "./atoms/TimerProgress";
import TimerContent from "./atoms/TimerContent";

function Timer({
  time,
  label,
  progress,
  onReset,
  onChangeLabel,
  onChangeTime,
}) {
  return (
    <div className="dt-timer">
      <TimerProgress value={progress} />
      <TimerContent
        time={time}
        label={label}
        onReset={onReset}
        onChangeLabel={onChangeLabel}
        onChangeTime={onChangeTime}
        isResettable={progress > 0}
      />
    </div>
  );
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
  onChangeLabel: PropTypes.func.isRequired,
  onChangeTime: PropTypes.func.isRequired,
};

export default Timer;

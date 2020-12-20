import React from "react";
import PropTypes from "prop-types";
import TimerContentLabel from "./atoms/TimerContentLabel";
import TimerContentValue from "./atoms/TimerContentValue";
import TimerContentReset from "./atoms/TimerContentReset";

function TimerContent({
  time,
  label,
  isResettable,
  onReset,
  onChangeLabel,
  onChangeTime,
}) {
  return (
    <div className="dt-timer__content">
      <TimerContentLabel label={label} onChange={onChangeLabel} />
      <TimerContentValue time={time} onChange={onChangeTime} />
      <TimerContentReset onClick={onReset} enabled={isResettable} />
    </div>
  );
}

TimerContent.propTypes = {
  time: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  isResettable: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
  onChangeLabel: PropTypes.func.isRequired,
  onChangeTime: PropTypes.func.isRequired,
};

export default TimerContent;

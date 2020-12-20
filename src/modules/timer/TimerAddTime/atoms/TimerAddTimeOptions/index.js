import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../../../../../shared/components/RoundButton";

function AddTimeButton({ onClick, children }) {
  return (
    <RoundButton size="small" onClick={onClick}>
      {children}
    </RoundButton>
  );
}

function TimerAddTimerOptions({ isOpened, onClickAddTime }) {
  return (
    <div
      className={`dt-timer-add-time-wrapper__options dt-timer-add-time-wrapper__options--${
        isOpened ? "visible" : "hidden"
      }`}
    >
      <AddTimeButton onClick={() => onClickAddTime(3600)}>+1h</AddTimeButton>
      <AddTimeButton onClick={() => onClickAddTime(60)}>+1m</AddTimeButton>
      <AddTimeButton onClick={() => onClickAddTime(1)}>+1s</AddTimeButton>

      <AddTimeButton onClick={() => onClickAddTime(18000)}>+5h</AddTimeButton>
      <AddTimeButton onClick={() => onClickAddTime(300)}>+5m</AddTimeButton>
      <AddTimeButton onClick={() => onClickAddTime(5)}>+5s</AddTimeButton>

      <AddTimeButton onClick={() => onClickAddTime(108000)}>+30h</AddTimeButton>
      <AddTimeButton onClick={() => onClickAddTime(1800)}>+30m</AddTimeButton>
      <AddTimeButton onClick={() => onClickAddTime(30)}>+30s</AddTimeButton>
    </div>
  );
}

TimerAddTimerOptions.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClickAddTime: PropTypes.func.isRequired,
};

export default TimerAddTimerOptions;

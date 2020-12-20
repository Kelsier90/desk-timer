import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../../../shared/components/RoundButton";
import ClockIcon from "../../../shared/components/icons/ClockIcon";
import TimerAddTimerOptions from "./atoms/TimerAddTimeOptions";

function TimerAddTime({ isOpened = false, onClick, onClickAddTime }) {
  return (
    <div className="dt-timer-add-time-wrapper">
      <RoundButton onClick={onClick} color="transparent">
        <ClockIcon />
      </RoundButton>
      <TimerAddTimerOptions
        isOpened={isOpened}
        onClickAddTime={onClickAddTime}
      />
    </div>
  );
}

TimerAddTime.propTypes = {
  isOpened: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onClickAddTime: PropTypes.func.isRequired,
};

export default TimerAddTime;

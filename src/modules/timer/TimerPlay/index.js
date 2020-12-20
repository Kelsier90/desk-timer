import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../../../shared/components/RoundButton";
import PlayIcon from "../../../shared/components/icons/PlayIcon";
import PauseIcon from "../../../shared/components/icons/PauseIcon";

function TimerPlay({ isRunning, disabled = false, onClick }) {
  return (
    <div className="dt-timer-play-wrapper">
      <RoundButton size="large" onClick={onClick} disabled={disabled}>
        {isRunning ? <PauseIcon /> : <PlayIcon />}
      </RoundButton>
    </div>
  );
}

TimerPlay.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default TimerPlay;

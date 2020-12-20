import React from "react";
import PropTypes from "prop-types";
import TimerContainer from "./atoms/TimerContainer";

function TimerList({ timers, selectedTimer }) {
  return (
    <div className="dt-timer-list-wrapper">
      <div className="dt-timer-list-wrapper__list">
        <div
          className="dt-timer-list-wrapper__list__content"
          style={{ top: selectedTimer * -325 }}
        >
          {timers.map((timer, i) => (
            <TimerContainer key={timer.id} timer={timer} timerIndex={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

TimerList.propTypes = {
  timers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTimer: PropTypes.number.isRequired,
};

export default TimerList;

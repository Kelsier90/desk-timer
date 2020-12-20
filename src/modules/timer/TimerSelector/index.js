import React from "react";
import PropTypes from "prop-types";
import { timerStatus } from "../context/TimersContext";
import PlayIcon from "../../../shared/components/icons/PlayIcon";
import PauseIcon from "../../../shared/components/icons/PauseIcon";
import AlarmIcon from "../../../shared/components/icons/AlarmIcon";

const getStartIcon = (timer) => {
  switch (timer.status) {
    case timerStatus.running:
      return <PlayIcon />;
    case timerStatus.paused:
      return <PauseIcon />;
    case timerStatus.finished:
      return <AlarmIcon />;
    default:
      return null;
  }
};

function TimerSelector({ timers, selectedTimer, onSelectTimer }) {
  return (
    <div className="dt-timer-selector-wrapper">
      <ul className="dt-timer-selector-wrapper__list">
        {timers.map((timer, i) => (
          <li
            key={timer.id}
            className={`dt-timer-selector-wrapper__list__item${
              i === selectedTimer
                ? " dt-timer-selector-wrapper__list__item--selected"
                : ""
            }`}
            onClick={() => onSelectTimer(i)}
            title={timer.label}
          >
            <div
              className={`dt-timer-selector-wrapper__list__item__start-icon${
                timer.status === timerStatus.finished
                  ? " dt-timer-selector-wrapper__list__item__start-icon--shaking"
                  : ""
              }`}
            >
              {getStartIcon(timer)}
            </div>
            <div>{timer.label || "Untitled"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

TimerSelector.propTypes = {
  timers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTimer: PropTypes.number.isRequired,
  onSelectTimer: PropTypes.func.isRequired,
};

export default TimerSelector;

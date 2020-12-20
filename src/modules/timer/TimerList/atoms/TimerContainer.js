import React from "react";
import PropTypes from "prop-types";
import Notification from "../../../../shared/utils/notifications/Notification";
import { timerStatus, useTimers } from "../../context/TimersContext";
import {
  dispatchFinishTimer,
  dispatchResetTimer,
  dispatchUpdateTimer,
} from "../../context/TimersReducer";
import Timer from "./Timer";
import useAudio from "../../../../shared/utils/hooks/useAudio";
import alarmSound from "../../../../shared/utils/sounds/alarm.mp3";

const clearTimeInterval = (timeIntervalRef) => {
  if (timeIntervalRef.current) {
    clearInterval(timeIntervalRef.current);
    timeIntervalRef.current = null;
  }
};

function TimerContainer({ timer, timerIndex }) {
  const [, dispatch] = useTimers();
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const { play: playAlarmSound, stop: stopAlarmSound } = useAudio(
    alarmSound,
    true
  );

  const timeIntervalRef = React.useRef(null);

  React.useEffect(() => {
    switch (timer.status) {
      case timerStatus.idle:
        clearTimeInterval(timeIntervalRef);
        setElapsedTime(0);
        break;
      case timerStatus.running:
        timeIntervalRef.current = setInterval(() => {
          setElapsedTime((v) => {
            if (v + 1 === timer.time) {
              clearTimeInterval(timeIntervalRef);
            }
            return v + 1;
          });
        }, 1000);
        break;
      case timerStatus.paused:
      case timerStatus.finished:
        clearTimeInterval(timeIntervalRef);
        break;
      default:
        break;
    }

    return () => {
      clearTimeInterval(timeIntervalRef);
    };
  }, [dispatch, timerIndex, timer.status, timer.time, timer.title]);

  React.useEffect(() => {
    if (timer.status === timerStatus.running) {
      if (elapsedTime === timer.time) {
        dispatchFinishTimer(dispatch, timerIndex);
        new Notification({
          title: timer.label || "Untitled",
          body: "The alarm is ringing",
        }).show();

        playAlarmSound();
      }
    }
  }, [
    timer.time,
    timer.status,
    elapsedTime,
    dispatch,
    timerIndex,
    timer.label,
    playAlarmSound,
  ]);

  return (
    <Timer
      time={timer.time - elapsedTime}
      progress={timer.time === 0 ? 0 : (elapsedTime / timer.time) * 100}
      label={timer.label}
      onReset={() => {
        dispatchResetTimer(dispatch, timerIndex);
        stopAlarmSound();
      }}
      onChangeLabel={(label) =>
        dispatchUpdateTimer(dispatch, timerIndex, { label, time: timer.time })
      }
      onChangeTime={(time) =>
        dispatchUpdateTimer(dispatch, timerIndex, {
          label: timer.label,
          time,
        })
      }
    />
  );
}

TimerContainer.propTypes = {
  timer: PropTypes.object.isRequired,
  timerIndex: PropTypes.number.isRequired,
};

export default TimerContainer;

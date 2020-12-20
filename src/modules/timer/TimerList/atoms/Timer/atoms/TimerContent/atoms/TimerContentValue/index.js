import React from "react";
import PropTypes from "prop-types";
import {
  formatTimeFromTimestamp,
  getTimeFromTimestamp,
  getTimestampFromTime,
} from "../../../../../../../../../shared/utils/helpers/time";
import TimerContentValueInput from "./atoms/TimerContentValueInput";

function TimerContentValue({ time, onChange }) {
  const [editHours, setEditHours] = React.useState(false);
  const [editMinutes, setEditMinutes] = React.useState(false);
  const [editSeconds, setEditSeconds] = React.useState(false);

  const [hours, minutes, seconds] = getTimeFromTimestamp(time);
  const [fHours, fMinutes, fSeconds] = formatTimeFromTimestamp(time);

  const handleChangeHours = (value) => {
    onChange(getTimestampFromTime(value, minutes, seconds));
  };

  const handleChangeMinutes = (value) => {
    onChange(getTimestampFromTime(hours, value, seconds));
  };

  const handleChangeSeconds = (value) => {
    onChange(getTimestampFromTime(hours, minutes, value));
  };

  return (
    <div className="dt-timer__content__value">
      {editHours ? (
        <TimerContentValueInput
          value={hours}
          min={0}
          max={99}
          onChange={handleChangeHours}
          onBlur={() => setEditHours(false)}
          onTab={() => setEditMinutes(true)}
        />
      ) : (
        <span onClick={() => setEditHours(true)}>{fHours}</span>
      )}
      :
      {editMinutes ? (
        <TimerContentValueInput
          value={minutes}
          min={0}
          max={59}
          onChange={handleChangeMinutes}
          onBlur={() => setEditMinutes(false)}
          onTab={() => setEditSeconds(true)}
        />
      ) : (
        <span onClick={() => setEditMinutes(true)}>{fMinutes}</span>
      )}
      :
      {editSeconds ? (
        <TimerContentValueInput
          value={seconds}
          min={0}
          max={59}
          onChange={handleChangeSeconds}
          onBlur={() => setEditSeconds(false)}
        />
      ) : (
        <span onClick={() => setEditSeconds(true)}>{fSeconds}</span>
      )}
    </div>
  );
}

TimerContentValue.propTypes = {
  time: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimerContentValue;

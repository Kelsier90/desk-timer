import React from "react";
import PropTypes from "prop-types";

const r = 137.5;
const circumference = r * 2 * Math.PI;

function TimerProgress({ value }) {
  return (
    <svg
      className={`dt-timer__progress-ring${
        value === 100 ? " dt-timer__progress-ring--blinking" : ""
      }`}
    >
      <circle
        className="dt-timer__progress-ring__circle"
        r={r}
        cx={162.5}
        cy={162.5}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: circumference - (value / 100) * circumference,
        }}
      />
    </svg>
  );
}

TimerProgress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default TimerProgress;

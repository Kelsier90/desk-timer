import React from "react";
import PropTypes from "prop-types";

function Clock({ hours, minutes }) {
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}

Clock.propTypes = {
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
};

export default Clock;

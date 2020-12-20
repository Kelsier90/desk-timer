import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../../../shared/components/RoundButton";
import BinIcon from "../../../shared/components/icons/BinIcon";

function TimerRemove({ onClick, disabled = false }) {
  return (
    <div className="dt-timer-remove-wrapper">
      <RoundButton color="transparent" onClick={onClick} disabled={disabled}>
        <BinIcon />
      </RoundButton>
    </div>
  );
}

TimerRemove.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default TimerRemove;

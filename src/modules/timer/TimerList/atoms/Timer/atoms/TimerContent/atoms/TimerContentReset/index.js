import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../../../../../../../../../shared/components/RoundButton";
import UndoIcon from "../../../../../../../../../shared/components/icons/UndoIcon";

function TimerContentReset({ onClick, enabled }) {
  return (
    <div className="dt-timer__content__reset-wrapper">
      <RoundButton color="transparent" onClick={onClick} visible={enabled}>
        <UndoIcon />
      </RoundButton>
    </div>
  );
}

TimerContentReset.propTypes = {
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TimerContentReset;

import React from "react";
import PropTypes from "prop-types";
import RoundButton from "../../../../../../../../../../../shared/components/RoundButton";
import UpIcon from "../../../../../../../../../../../shared/components/icons/UpIcon";
import DownIcon from "../../../../../../../../../../../shared/components/icons/DownIcon";

function TimerContentValueInput({
  value,
  min,
  max,
  onChange,
  onBlur,
  onTab = null,
}) {
  const handleUp = () => {
    onChange(value === max ? min : value + 1);
  };

  const handleDown = () => {
    onChange(value === min ? max : value - 1);
  };

  const handleChange = (ev) => {
    let newValue = parseInt(ev.target.value);
    if (isNaN(newValue)) onChange(0);
    else {
      if (newValue > max) newValue = max;
      if (newValue < min) newValue = min;
      onChange(newValue);
    }
  };

  const handleKeyDown = (ev) => {
    if (ev.key === "ArrowUp") handleUp();
    if (ev.key === "ArrowDown") handleDown();

    const blurKeys = ["Escape", "Tab", "Enter"];
    if (blurKeys.includes(ev.key)) {
      ev.preventDefault();
      onBlur();
      if (onTab && ev.key === "Tab") {
        onTab();
      }
    }
  };

  const handleWheel = (ev) => {
    if (ev.deltaY > 0) {
      handleDown();
    } else if (ev.deltaY < 0) {
      handleUp();
    }
  };

  return (
    <>
      <div
        className="dt-timer__content__value__input-overlay"
        onClick={onBlur}
      />
      <div className="dt-timer__content__value__input-wrapper">
        <div className="dt-timer__content__value__input-wrapper__up">
          <RoundButton size="xsmall" color="transparent" onClick={handleUp}>
            <UpIcon />
          </RoundButton>
        </div>

        <input
          className="dt-timer__content__value__input-wrapper__input"
          value={value}
          autoFocus
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        />

        <div className="dt-timer__content__value__input-wrapper__down">
          <RoundButton size="xsmall" color="transparent" onClick={handleDown}>
            <DownIcon />
          </RoundButton>
        </div>
      </div>
    </>
  );
}

TimerContentValueInput.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onTab: PropTypes.func,
};

export default TimerContentValueInput;

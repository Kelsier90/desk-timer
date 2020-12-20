import React from "react";
import PropTypes from "prop-types";

function TimerContentLabel({ label, onChange }) {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleTab = (ev) => {
    if (ev.key === "Tab") {
      ev.preventDefault();
    }
  };

  return (
    <div className="dt-timer__content__label-wrapper">
      <div
        className={`dt-timer__content__label-wrapper__input-wrapper${
          isFocused
            ? " dt-timer__content__label-wrapper__input-wrapper--focused"
            : ""
        }`}
      >
        <input
          className="dt-timer__content__label-wrapper__input-wrapper__input"
          value={label}
          placeholder="Untitled"
          onChange={(ev) => onChange(ev.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleTab}
        />
      </div>
    </div>
  );
}

TimerContentLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimerContentLabel;

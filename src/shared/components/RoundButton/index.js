import React from "react";
import PropTypes from "prop-types";

const sizeClasses = {
  xsmall: "dt-round-button--xsmall",
  small: "dt-round-button--small",
  medium: "",
  large: "dt-round-button--large",
};

const colorClasses = {
  primary: "",
  transparent: "dt-round-button--transparent",
};

function RoundButton({
  size = "medium",
  color = "primary",
  visible = true,
  disabled = false,
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={`dt-round-button ${sizeClasses[size]} ${colorClasses[color]}${
        !visible ? " dt-round-button--invisible" : ""
      }`}
      disabled={disabled}
    >
      <div className="dt-round-button__content">{children}</div>
    </button>
  );
}

RoundButton.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "transparent"]),
  visible: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default RoundButton;

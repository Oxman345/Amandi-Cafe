import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends Component {
  render() {
    const { children, onClick, variant } = this.props;
    return (
      <button
        className={`btn ${
          variant === "primary" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  variant: "primary",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

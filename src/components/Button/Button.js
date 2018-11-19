import React from "react";
import PropTypes from "prop-types";

/**
 * Button
 *
 */
const Button = ({ children }) => (
  <button type="button">
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;

import React from "react";
import { withStyles, IconButton } from "material-ui";
import PropTypes from "prop-types";

import Style from "./iconButton.less";

function IconCustomButton({ ...props }) {
  const { color, children, customClass, ...rest } = props;
  return (
    <IconButton
      {...rest}
      className={
        Style.button +
        (color ? " " + Style[color] : "") +
        (customClass ? " " + customClass : "")
      }
    >
      {children}
    </IconButton>
  );
}

IconCustomButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "simple"
  ]),
  customClass: PropTypes.string,
  disabled: PropTypes.bool
};

export default IconCustomButton;

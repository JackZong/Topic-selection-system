import React from "react";
import { withStyles, FormControl, InputLabel, Input } from "material-ui";
import { Clear, Check } from "material-ui-icons";
 // 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用
import PropTypes from "prop-types";
import cx from "classnames";

import Style from "./customInput.less";

function CustomInput({ ...props }) {
  console.log(props.classes)
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success
  } = props;

  const labelClasses = cx({
    [" " + Style.labelRootError]: error,
    [" " + Style.labelRootSuccess]: success && !error
  });
  const inkbarClasses = cx({
    [Style.inkbarError]: error,
    [Style.inkbarSuccess]: success && !error,
    [Style.inkbar]: !success && !error
  });
  const marginTop = cx({
    [Style.marginTop]: labelText === undefined
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + Style.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={Style.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: Style.disabled,
          underline: Style.underline,
          inkbar: inkbarClasses
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={Style.feedback + " " + Style.labelRootError} />
      ) : success ? (
        <Check className={Style.feedback + " " + Style.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default CustomInput

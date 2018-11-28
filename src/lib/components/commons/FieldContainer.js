import React, { Component } from "react";
import Label from "./Label";
import ErrorInform from "./ErrorInform/index";

class FieldContainer extends Component {
  static defaultProps = {
    id: 1,
    classes: {
      container: "",
      content: "",
      errString: ""
    },
    label: ""
  };

  render() {
    const { classes, id, label, children } = this.props;

    return (
      <div
        className={`dynamic-input-container form-group ${classes.container}`}
      >
        <Label htmlFor={id} label={label} />
        {children}
        <ErrorInform id={id} classes={classes.errString} />
      </div>
    );
  }
}

export default FieldContainer;

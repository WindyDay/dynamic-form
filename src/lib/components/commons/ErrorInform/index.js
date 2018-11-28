import React, { Component } from "react";
import "./style.scss";

class ErrorInform extends Component {
  render() {
    const { id, errString, classes } = this.props;
    return (
      <small id={id} className={`dynamic-input-err form-text ${classes}`}>
        err string
      </small>
    );
  }
}

export default ErrorInform;

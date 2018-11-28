import React, { Component } from "react";

class Label extends Component {
  render() {
    const { id, label } = this.props;

    return <label htmlFor={id}>{label}</label>;
  }
}

export default Label;

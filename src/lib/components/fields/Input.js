import React, { Component } from "react";

class Input extends Component {
  static defaultProps = {
    classes: {
      container: "",
      content: ""
    },
    id: 1,
    label: "",
    type: "text"
  };
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { classes, id, label, type } = this.props;

    const { value } = this.state;

    return (
      <div
        className={`dynamic-input-container form-group ${classes.container}`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          type={type || "text"}
          className={`dynamic-input-content form-control ${classes.content}`}
          onChange={this.onChange}
          value={value}
        />
        <span>err string</span>
      </div>
    );
  }
}

export default Input;

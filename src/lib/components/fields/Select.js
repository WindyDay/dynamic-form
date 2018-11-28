import React, { Component } from "react";

class Select extends Component {
  static defaultProps = {
    classes: {
      container: "",
      content: ""
    },
    id: 1,
    label: "",
    type: "text",
    options: []
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
    const { classes, id, label, options } = this.props;

    const { value } = this.state;

    return (
      <div
        className={`dynamic-input-container form-group ${classes.container}`}
      >
        <label htmlFor={id}>{label}</label>
        <select onChange={this.onChange} value={value}>
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
        <span>err string</span>
      </div>
    );
  }
}

export default Select;

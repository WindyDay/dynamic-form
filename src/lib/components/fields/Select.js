import React, { Component } from "react";
import FieldContainer from "../commons/FieldContainer";

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
    const { options, classes } = this.props;

    const { value } = this.state;

    return (
      <FieldContainer {...this.props}>
        <select
          onChange={this.onChange}
          value={value}
          className={`dynamic-input-content form-control ${classes.content}`}
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </FieldContainer>
    );
  }
}

export default Select;

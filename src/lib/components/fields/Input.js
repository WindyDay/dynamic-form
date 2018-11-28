import React, { Component } from "react";
import FieldContainer from "../commons/FieldContainer";

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
    const { classes, type } = this.props;

    const { value } = this.state;

    return (
      <FieldContainer {...this.props}>
        <input
          type={type || "text"}
          className={`dynamic-input-content form-control ${classes.content}`}
          onChange={this.onChange}
          value={value}
        />
      </FieldContainer>
    );
  }
}

export default Input;

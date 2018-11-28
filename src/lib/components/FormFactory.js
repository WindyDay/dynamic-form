// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import components from "./fields";
import "bootstrap/dist/css/bootstrap.min.css";

class FormFactory extends Component {
  render() {
    const { fields } = this.props;
    return (
      <div>
        {fields.map(field => components[field.component](field.props) || null)}
      </div>
    );
  }
}

export default FormFactory;

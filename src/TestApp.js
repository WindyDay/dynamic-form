import React, { Component } from "react";
import FormFactory from "./lib/components/FormFactory";

const testFields = [
  //Normal input
  {
    component: "Input",
    props: {
      key: "1",
      type: "email",
      id: "customerEmail",
      label: "Customer Email",
      classes: {
        container: "container-class",
        content: "content-class"
      },
      style: undefined
    }
  },
  // Select
  {
    component: "Select",
    props: {
      key: "2",
      id: "selectOption_id",
      label: "Select options",
      classes: {
        container: "container-class",
        content: "content-class"
      },
      options: [
        {
          value: "option_1",
          label: "Option 1"
        },
        {
          value: "option_2",
          label: "Option 2"
        }
      ],
      style: undefined
    }
  }
];

class TestApp extends Component {
  render() {
    return (
      <div className="col-sm-8 col-md-3 justify-content-">
        <FormFactory fields={testFields} />
      </div>
    );
  }
}

export default TestApp;

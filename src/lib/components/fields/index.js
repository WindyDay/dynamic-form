import React from "react";
import Input from "./Input";
import Select from "./Select";

export default {
  Input: props => <Input {...props} />,
  Select: props => <Select {...props} />
};

import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { Field } from "redux-form";

const StyledInput = styled.span`
  margin: 5px;
`;

const Input = (props) => {
  const {
    input,
    type,
    label,
    meta: { touched, error },
  } = props;
  return (
    <StyledInput>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
        {...input}
        type={type}
        placeholder={label}
      />
      {touched && error && <span>{error}</span>}
    </StyledInput>
  );
};

const InputField = (props) => {
  return <Field {...props} component={Input} />;
};

export default InputField;

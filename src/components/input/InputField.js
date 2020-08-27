import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const StyledInput = styled.span`
  margin: 5px;
`;

const InputField = (props) => (
  <StyledInput>
    <TextField  variant="outlined" {...props} />
  </StyledInput>
);

export default InputField;

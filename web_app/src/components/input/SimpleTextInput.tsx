import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  border: 2px solid grey;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;

  &:active {
    outline: none;
    border: 2px solid blue;
  }

  &:focus {
    outline: none;
    border: 2px solid blue;
  }
`;

const SimpleTextInput: React.FunctionComponent<React.InputHTMLAttributes<
  HTMLInputElement
>> = (props) => {
  return <Input {...props} />;
};

export default SimpleTextInput;

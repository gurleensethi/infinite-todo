import React from "react";
import styled from "styled-components";

const Input = styled.input<{ borderColor?: string }>`
  display: block;
  border: 2px solid grey;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;

  &:active {
    outline: none;
    border: 2px solid ${({ borderColor }) => borderColor || "blueviolet"};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ borderColor }) => borderColor || "blueviolet"};
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  borderColor?: string;
}

const SimpleTextInput: React.FunctionComponent<Props> = (props) => {
  return <Input {...props} />;
};

export default SimpleTextInput;

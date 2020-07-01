import React from "react";
import styled from "styled-components";

/* Styles */
const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 4px;
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Input = styled.input<{ borderColor?: string; width?: string }>`
  display: block;
  border: 2px solid grey;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  width: ${(props) => props.width};

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
  label?: string;
  borderColor?: string;
  width?: string;
}

const SimpleTextInput: React.FunctionComponent<Props> = ({
  label,
  ...props
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...props} />
    </Container>
  );
};

export default SimpleTextInput;

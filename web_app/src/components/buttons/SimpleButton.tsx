import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const SimpleButton = styled.button<Props>`
  border: 0px;
  outline: none;
  background-color: ${({ color }) => color || "blueviolet"};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: unset;
  }
`;

export default SimpleButton;

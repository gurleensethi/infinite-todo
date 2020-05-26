import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Action {
  onClick: () => void;
  iconName: string;
}

interface OwnProps {
  title: string;
  actions?: Action[];
}

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
`;

const Title = styled.div`
  font-size: 20px;
`;

const SettingsButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

const TopBar: FunctionComponent<OwnProps> = ({ title, actions }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {actions &&
        actions.map(({ onClick, iconName }, index) => {
          return (
            <SettingsButton onClick={onClick} key={index}>
              <i className="material-icons">{iconName}</i>
            </SettingsButton>
          );
        })}
    </Container>
  );
};

export default TopBar;

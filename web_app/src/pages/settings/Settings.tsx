import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { showModal } from "src/data/redux/ui/ui.actions";
import { connect, ConnectedProps } from "react-redux";
import { DELETE_ALL_TASKS_MODAL } from "src/data/types";

/* Styles */
const Container = styled.div`
  padding: 24px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled.i`
  margin-bottom: 8px;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: 0.3s;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const Heading = styled.div`
  font-size: 24px;
`;

const OptionList = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const Option = styled.li`
  border-top: 1px solid lightgrey;
  padding: 8px;
  transition: 0.3s;

  &:last-of-type {
    border-bottom: 1px solid lightgrey;
  }

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }

  &:active {
    background-color: grey;
  }
`;

/* State and Props */
interface OwnProps {
  onClose?: () => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  showModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Settings: FunctionComponent<OwnProps & PropsFromRedux> = ({
  onClose,
  showModal,
}) => {
  const handleDeleteAllTaskClick = () => {
    showModal({ type: DELETE_ALL_TASKS_MODAL });
  };

  return (
    <Container>
      <TopBar>
        <Heading>Settings</Heading>
        <CloseIcon className="material-icons" onClick={onClose}>
          close
        </CloseIcon>
      </TopBar>
      <OptionList onClick={handleDeleteAllTaskClick}>
        <Option>Delete all tasks</Option>
      </OptionList>
    </Container>
  );
};

export default connector(Settings);

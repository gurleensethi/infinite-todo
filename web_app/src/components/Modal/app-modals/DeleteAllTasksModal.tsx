import React, { FunctionComponent } from "react";
import { ConnectedProps, connect } from "react-redux";
import { hideModal } from "src/data/redux/ui/ui.actions";
import { DELETE_ALL_TASKS_MODAL } from "src/data/types";
import styled from "styled-components";
import SimpleButton from "src/components/buttons/SimpleButton";
import SimpleModal from "../modal-types/SimpleModal";
import { deleteAllTasks } from "src/data/redux/task/task.actions";

/* Styles */

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 16px;
`;

/* State and Props */

const mapDispatchToProps = {
  hideModal,
  deleteAllTasks,
};

const connector = connect(undefined, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const DeleteAllTasksModal: FunctionComponent<PropsFromRedux> = ({
  hideModal,
  deleteAllTasks,
}) => {
  const handleDeleteAllTasks = async () => {
    deleteAllTasks();
    hideModal(DELETE_ALL_TASKS_MODAL);
  };

  const handleCloseModal = () => {
    hideModal(DELETE_ALL_TASKS_MODAL);
  };

  return (
    <SimpleModal onClose={handleCloseModal}>
      <Container>
        <Title>Are sure you want to delete all the data?</Title>
        <SimpleButton onClick={handleDeleteAllTasks}>
          Delete All Data
        </SimpleButton>
      </Container>
    </SimpleModal>
  );
};

export default connector(DeleteAllTasksModal);

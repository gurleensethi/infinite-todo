import React, { FunctionComponent } from "react";
import { ConnectedProps, connect } from "react-redux";
import { hideModal } from "src/data/redux/ui/ui.actions";
import { DELETE_ALL_TASKS_MODAL } from "src/data/types";
import styled from "styled-components";
import { deleteAllTasks } from "src/data/redux/task/task.actions";
import SimpleButton from "../../buttons/SimpleButton";
import SimpleModal from "../modal-types/SimpleModal";
import SimpleTextInput from "src/components/input/SimpleTextInput";
import Spacing from "src/components/spacing/Spacing";

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
  const [inputText, setInputText] = React.useState<string>("");

  const handleDeleteAllTasks = async () => {
    deleteAllTasks();
    hideModal(DELETE_ALL_TASKS_MODAL);
  };

  const handleCloseModal = () => {
    hideModal(DELETE_ALL_TASKS_MODAL);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputText(value);
  };

  return (
    <SimpleModal onClose={handleCloseModal}>
      <Container>
        <Title>Are sure you want to delete all the data?</Title>
        <p>
          Type <strong>Delete all</strong> below
        </p>
        <Spacing margin={{ top: 16, bottom: 16 }}>
          <SimpleTextInput
            onChange={handleTextChange}
            value={inputText}
            placeholder="Delete all"
            borderColor="red"
          />
        </Spacing>
        <SimpleButton
          onClick={handleDeleteAllTasks}
          disabled={inputText !== "Delete all"}
          color="red"
        >
          Delete all
        </SimpleButton>
      </Container>
    </SimpleModal>
  );
};

export default connector(DeleteAllTasksModal);

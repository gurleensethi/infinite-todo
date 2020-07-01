import React, { FunctionComponent } from "react";
import { RootState, EDIT_TASK_MODAL, Task } from "src/data/types";
import { connect, ConnectedProps } from "react-redux";
import MobileFullScreenModal from "../modal-types/MobileFullScreenModal";
import { hideModal } from "src/data/redux/ui/ui.actions";
import TopBar from "src/components/top-bar/TopBar";
import SimpleTextInput from "src/components/input/SimpleTextInput";
import styled from "styled-components";
import SimpleButton from "src/components/buttons/SimpleButton";

/* Styles */
const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

/* State and Props */
interface OwnProps {
  task: Task;
}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {};
};

const mapDispatchToProps = {
  hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditTaskModal: FunctionComponent<OwnProps & PropsFromRedux> = ({
  hideModal,
  task,
}) => {
  const handleModalClose = React.useCallback(() => {
    hideModal(EDIT_TASK_MODAL);
  }, [hideModal]);

  return (
    <MobileFullScreenModal onClose={handleModalClose}>
      <TopBar
        title="Edit Task"
        actions={[{ iconName: "close", onClick: handleModalClose }]}
      />
      <Container>
        <SimpleTextInput value={task.content} label="Task" width="100%" />
        <SimpleButton style={{ marginTop: "40px", justifySelf: "right" }}>
          Save
        </SimpleButton>
      </Container>
    </MobileFullScreenModal>
  );
};

export default connector(EditTaskModal);

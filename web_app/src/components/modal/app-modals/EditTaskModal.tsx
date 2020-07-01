import React, { FunctionComponent } from "react";
import { RootState, EDIT_TASK_MODAL, Task } from "src/data/types";
import { connect, ConnectedProps } from "react-redux";
import MobileFullScreenModal from "../modal-types/MobileFullScreenModal";
import { hideModal } from "src/data/redux/ui/ui.actions";
import TopBar from "src/components/top-bar/TopBar";

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
}) => {
  const handleModalClose = React.useCallback(() => {
    hideModal(EDIT_TASK_MODAL);
  }, [hideModal]);

  return (
    <MobileFullScreenModal onClose={handleModalClose}>
      <TopBar title="Edit Task" />
    </MobileFullScreenModal>
  );
};

export default connector(EditTaskModal);

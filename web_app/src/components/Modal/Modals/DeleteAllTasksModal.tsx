import React, { FunctionComponent } from "react";
import SimpleModal from "src/components/Modal/SimpleModal";
import { ConnectedProps, connect } from "react-redux";
import { hideModal } from "src/data/redux/ui/ui.actions";
import { DELETE_ALL_TASKS_MODAL } from "src/data/types";
import MobileFullScreenModal from "../MobileFullScreenModal";

/* State and Props */

const mapDispatchToProps = {
  hideModal,
};

const connector = connect(undefined, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const DeleteAllTasksModal: FunctionComponent<PropsFromRedux> = ({
  hideModal,
}) => {
  return (
    <MobileFullScreenModal onClose={() => hideModal(DELETE_ALL_TASKS_MODAL)}>
      <div>Do you want to delete</div>
      <div>all the data?</div>
    </MobileFullScreenModal>
  );
};

export default connector(DeleteAllTasksModal);

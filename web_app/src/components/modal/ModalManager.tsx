import React, { FunctionComponent } from "react";
import {
  DELETE_ALL_TASKS_MODAL,
  RootState,
  SETTINGS_MODAL,
  EDIT_TASK_MODAL,
  ModalType,
} from "src/data/types";
import styled from "styled-components";
import { connect, ConnectedProps } from "react-redux";
import ModalNotFoundError from "src/errors/modal-not-found";
import DeleteAllTasksModal from "./app-modals/DeleteAllTasksModal";
import SettingsModal from "./app-modals/SettingsModal";
import EditTaskModal from "./app-modals/EditTaskModal";

const modalLookupTable: Record<ModalType, React.ComponentType<any>> = {
  [DELETE_ALL_TASKS_MODAL]: DeleteAllTasksModal,
  [SETTINGS_MODAL]: SettingsModal,
  [EDIT_TASK_MODAL]: EditTaskModal,
};

/* Styles */
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

/* Props and State */

const mapStateToProps = (state: RootState) => {
  return {
    modals: state.ui.modals,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ModalManager: FunctionComponent<PropsFromRedux> = ({
  children,
  modals,
}) => {
  return (
    <Container>
      {children}
      {modals &&
        modals.map((modal) => {
          const Modal = modalLookupTable[modal.type];
          if (!Modal) {
            throw new ModalNotFoundError(modal.type);
          }
          return <Modal key={modal.type} {...modal} />;
        })}
    </Container>
  );
};

export default connector(ModalManager);

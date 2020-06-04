import React, { FunctionComponent } from "react";
import DeleteAllTasksModal from "./app-modals/DeleteAllTasksModal";
import {
  DELETE_ALL_TASKS_MODAL,
  RootState,
  SETTINGS_MODAL,
} from "src/data/types";
import styled from "styled-components";
import { connect, ConnectedProps } from "react-redux";
import ModalNotFoundError from "src/errors/modal-not-found";
import SettingsModal from "./app-modals/SettingsModal";

const modalLookupTable: Record<
  string,
  React.ComponentType<Record<any, any>>
> = {
  [DELETE_ALL_TASKS_MODAL]: DeleteAllTasksModal,
  [SETTINGS_MODAL]: SettingsModal,
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

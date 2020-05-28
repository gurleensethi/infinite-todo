import React, { FunctionComponent } from "react";
import DeleteAllTasksModal from "./Modals/DeleteAllTasksModal";
import { DELETE_ALL_TASKS_MODAL, RootState } from "src/data/types";
import styled from "styled-components";
import { connect, ConnectedProps } from "react-redux";

const modalLookupTable: Record<
  string,
  React.ComponentType<Record<any, any>>
> = {
  [DELETE_ALL_TASKS_MODAL]: DeleteAllTasksModal,
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
          return <Modal {...modal} />;
        })}
    </Container>
  );
};

export default connector(ModalManager);

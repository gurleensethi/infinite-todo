import React, { FunctionComponent } from "react";
import { ConnectedProps, connect } from "react-redux";
import { hideModal } from "src/data/redux/ui/ui.actions";
import { DELETE_ALL_TASKS_MODAL } from "src/data/types";
import MobileFullScreenModal from "../modal-types/MobileFullScreenModal";
import styled from "styled-components";
import SimpleButton from "src/components/Buttons/SimpleButton";

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
};

const connector = connect(undefined, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const DeleteAllTasksModal: FunctionComponent<PropsFromRedux> = ({
  hideModal,
}) => {
  return (
    <MobileFullScreenModal onClose={() => hideModal(DELETE_ALL_TASKS_MODAL)}>
      <Container>
        <Title>Are sure you want to delete all the data?</Title>
        <SimpleButton>Delete All Data</SimpleButton>
      </Container>
    </MobileFullScreenModal>
  );
};

export default connector(DeleteAllTasksModal);

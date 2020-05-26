import React, { FunctionComponent } from "react";
// import DeleteAllTasksModal from "./Modals/DeleteAllTasksModal";
// import { ModalOptions, DELETE_ALL_TASKS_MODAL } from "src/data/types";
import styled from "styled-components";

// const modalLookupTable: Record<string, React.ComponentType> = {
//   [DELETE_ALL_TASKS_MODAL]: DeleteAllTasksModal,
// };

/* Styles */
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ModalManager: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ModalManager;

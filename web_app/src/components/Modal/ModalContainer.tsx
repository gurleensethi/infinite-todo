import React, { FunctionComponent } from "react";

/* Context for controlling dialog */
interface ModalContainerOptions {}

export const ModalContainerContext = React.createContext<ModalContainerOptions>(
  {}
);

/* Styles */

/* Props and State */

interface Props {
  children: React.ReactNode;
}

const ModalContainer: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalContainer;

import React, { FunctionComponent } from "react";

/* Context for controlling dialog */
interface DialogOptions {}

export const DialogContext = React.createContext<DialogOptions>({});

/* Styles */

/* Props and State */

interface Props {
  children: React.ReactNode;
}

const Dialog: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Dialog;

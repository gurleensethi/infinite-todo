import React, { FunctionComponent } from "react";

interface OwnProps {
  title: string;
  description: string;
}

const SimpleModal: FunctionComponent<OwnProps> = ({ title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default SimpleModal;

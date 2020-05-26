import React, { FunctionComponent } from "react";
import SimpleModal from "src/components/Modal/SimpleModal";

const DeleteAllTasksModal: FunctionComponent = (props) => {
  return (
    <SimpleModal title="Do you want to delete" description="all the data?" />
  );
};

export default DeleteAllTasksModal;

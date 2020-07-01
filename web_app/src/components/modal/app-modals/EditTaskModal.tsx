import React, { FunctionComponent } from "react";
import { RootState } from "src/data/types";
import { connect, ConnectedProps } from "react-redux";

/* State and Props */
interface OwnProps {}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {};
};

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const EditTaskModal: FunctionComponent<OwnProps & PropsFromRedux> = () => {
  return <div>Edit This Task!!</div>;
};

export default connector(EditTaskModal);

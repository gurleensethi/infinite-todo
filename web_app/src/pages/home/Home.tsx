import React, { FunctionComponent } from "react";
import TaskComponent from "src/components/TaskComponent/TaskComponent";

export const Home: FunctionComponent = (props) => {
  return <TaskComponent parentId={-1}></TaskComponent>;
};

import React, { FunctionComponent } from "react";
import { Task } from "src/data/types";

interface Props {
  tasks: Task[];
}

const TaskList: FunctionComponent<Props> = ({ tasks }) => {
  if (!tasks || tasks.length) {
    return null;
  }
  return (
    <div>
      {tasks.map((task) => {
        return <div>{task.content}</div>;
      })}
    </div>
  );
};

export default TaskList;

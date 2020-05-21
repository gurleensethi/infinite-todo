import React, { FunctionComponent } from "react";
import { Task } from "src/data/types";

interface Props {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

const TaskList: FunctionComponent<Props> = ({ tasks, onTaskClick }) => {
  if (!tasks || tasks.length === 0) {
    return null;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id} onClick={() => onTaskClick(task)}>
            {task.content}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(TaskList);

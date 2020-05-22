import React, { FunctionComponent } from "react";
import { Task } from "src/data/types";
import styled from "styled-components";

/* Styles */
const TaskItem = styled.div`
  font-size: 1rem;
  padding: 16px;
  border-bottom: 1px solid lightgrey;
  white-space: normal;
`;

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
          <TaskItem key={task.id} onClick={() => onTaskClick(task)}>
            {task.content}
          </TaskItem>
        );
      })}
    </div>
  );
};

export default React.memo(TaskList);

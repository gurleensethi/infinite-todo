import React, { FunctionComponent } from "react";
import { Task } from "src/data/types";
import styled from "styled-components";

/* Styles */
const TaskItem = styled.div<{ isSelected: boolean }>`
  font-size: 1rem;
  padding: 16px;
  border-bottom: 1px solid lightgrey;
  white-space: normal;
  transition: 0.3s;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgb(240, 240, 240)" : "none"};

  &:hover {
    cursor: pointer;
    background-color: rgb(240, 240, 240);
  }
`;

interface Props {
  selectedTaskId: number | undefined;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

const TaskList: FunctionComponent<Props> = ({
  tasks,
  onTaskClick,
  selectedTaskId,
}) => {
  if (!tasks || tasks.length === 0) {
    return null;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            onClick={() => onTaskClick(task)}
            isSelected={selectedTaskId === task.id}
          >
            {task.content}
          </TaskItem>
        );
      })}
    </div>
  );
};

export default React.memo(TaskList);

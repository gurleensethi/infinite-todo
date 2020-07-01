import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Task } from "src/data/types";

interface Props {
  isSelected: boolean;
  task: Task;
  onTaskClick: () => void;
  onDeleteTask: () => void;
}

/* Styles */
const TaskItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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

  &:hover > .material-icons {
    visibility: visible;
  }
`;

const TaskTextContent = styled.div`
  flex: 1;
`;

const EditIcon = styled.i`
  font-size: 1.2rem;
  color: grey;

  &:hover {
    color: darkgrey;
  }
`;

const DeleteIcon = styled.i`
  visibility: hidden;
  color: darkred;
  font-size: 1.2rem;
  margin-right: 8px;

  &:hover {
    color: red;
  }
`;

const TaskListItem: FunctionComponent<Props> = ({
  task,
  onTaskClick,
  onDeleteTask,
  isSelected,
}) => {
  const handleEditClick = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  const handleDeleteClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      onDeleteTask();
    },
    [onDeleteTask]
  );

  return (
    <TaskItem key={task.id} onClick={onTaskClick} isSelected={isSelected}>
      <TaskTextContent>{task.content}</TaskTextContent>
      <DeleteIcon className="material-icons" onClick={handleDeleteClick}>
        delete
      </DeleteIcon>
      <EditIcon className="material-icons" onClick={handleEditClick}>
        edit
      </EditIcon>
    </TaskItem>
  );
};

export default TaskListItem;

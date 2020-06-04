import React, { FunctionComponent } from "react";
import { RootState, Task } from "src/data/types";
import { selectTasksByParentId } from "src/data/redux/task/task.selectors";
import {
  fetchTasks,
  addTask,
  deleteTask,
} from "src/data/redux/task/task.actions";
import { connect, ConnectedProps } from "react-redux";
import TaskList from "../TaskList/TaskList";
import styled from "styled-components";

/* Styles */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
`;

const TaskForm = styled.form`
  width: 100%;
`;

const TaskInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgrey;
  background-color: lightgrey;
  font-size: 1rem;
  padding: 16px;
`;

const NoTasksFound = styled.div`
  align-self: center;
  margin-top: 16px;
`;

/* State */
type OwnProps = {
  selectedTaskId: string | undefined;
  parentId: string;
  onTaskClick: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {
    tasks: selectTasksByParentId(state, props.parentId),
  };
};

const mapDispatchToProps = {
  fetchTasks,
  addTask,
  deleteTask,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

/* Component */
const TaskComponent: FunctionComponent<OwnProps & PropsFromRedux> = ({
  parentId,
  fetchTasks,
  deleteTask,
  tasks,
  addTask,
  onTaskClick,
  onDeleteTask,
  selectedTaskId,
}) => {
  React.useEffect(() => {
    fetchTasks(parentId);
  }, [parentId, fetchTasks]);

  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask({ content: taskText, parentId }).then(() => setTaskText(""));
  };

  const hasTasks = tasks && tasks.length > 0;

  return (
    <Container>
      <TaskForm onSubmit={handleSubmit}>
        <TaskInput
          onChange={(event) => setTaskText(event.target.value)}
          value={taskText}
          placeholder="Enter Task..."
        />
      </TaskForm>
      {hasTasks ? (
        <TaskList
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={(task) => {
            deleteTask(task).then(() => {
              onDeleteTask(task);
            });
          }}
          selectedTaskId={selectedTaskId}
        />
      ) : (
        <NoTasksFound>No tasks found...</NoTasksFound>
      )}
    </Container>
  );
};

export default connector(TaskComponent);

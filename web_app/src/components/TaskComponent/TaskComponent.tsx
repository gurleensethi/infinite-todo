import React, { FunctionComponent } from "react";
import { RootState, Task } from "src/data/types";
import { selectTasksByParentId } from "src/data/redux/task/task.selectors";
import { fetchTasks, addTask } from "src/data/redux/task/task.actions";
import { connect, ConnectedProps } from "react-redux";
import TaskList from "../TaskList/TaskList";
import styled from "styled-components";

/* Styles */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TaskForm = styled.form`
  width: 100%;
`;

const TaskInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgrey;
  font-size: 16px;
  padding: 16px;
`;

/* State */
type OwnProps = {
  parentId: number;
  onTaskClick: (task: Task) => void;
};

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {
    tasks: selectTasksByParentId(state, props.parentId),
  };
};

const mapDispatchToProps = {
  fetchTasks,
  addTask,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

/* Component */
const TaskComponent: FunctionComponent<OwnProps & PropsFromRedux> = ({
  parentId,
  fetchTasks,
  tasks,
  addTask,
  onTaskClick,
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
        <TaskList tasks={tasks} onTaskClick={onTaskClick} />
      ) : (
        <div>No tasks found!</div>
      )}
    </Container>
  );
};

export default connector(TaskComponent);

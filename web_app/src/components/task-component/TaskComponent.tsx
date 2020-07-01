import React, { FunctionComponent } from "react";
import { RootState, Task, EDIT_TASK_MODAL } from "src/data/types";
import { selectTasksByParentId } from "src/data/redux/task/task.selectors";
import {
  fetchTasks,
  addTask,
  deleteTask,
} from "src/data/redux/task/task.actions";
import { connect, ConnectedProps } from "react-redux";
import TaskList from "../task-list/TaskList";
import styled from "styled-components";
import { showModal } from "src/data/redux/ui/ui.actions";

/* Styles */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
`;

const ParentTaskName = styled.div`
  padding: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
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
  selectedTask: Task | undefined;
  parentTask: Task;
  onTaskClick: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

const mapStateToProps = (state: RootState, { parentTask }: OwnProps) => {
  return {
    tasks: selectTasksByParentId(state, parentTask.id),
  };
};

const mapDispatchToProps = {
  fetchTasks,
  addTask,
  deleteTask,
  showModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

/* Component */
const TaskComponent: FunctionComponent<OwnProps & PropsFromRedux> = ({
  parentTask,
  fetchTasks,
  deleteTask,
  tasks,
  addTask,
  onTaskClick,
  onDeleteTask,
  showModal,
  selectedTask,
}) => {
  React.useEffect(() => {
    fetchTasks(parentTask.id);
  }, [parentTask, fetchTasks]);

  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask({ content: taskText, parentId: parentTask.id }).then(() =>
      setTaskText("")
    );
  };

  const handleDeleteTask = React.useCallback(
    (task: Task) => {
      deleteTask(task).then(() => {
        onDeleteTask(task);
      });
    },
    [deleteTask, onDeleteTask]
  );

  const handleEditTask = React.useCallback(
    (task: Task) => {
      showModal({ type: EDIT_TASK_MODAL, task });
    },
    [showModal]
  );

  const hasTasks = tasks && tasks.length > 0;

  return (
    <Container>
      <ParentTaskName>{parentTask.content}</ParentTaskName>
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
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          selectedTaskId={selectedTask?.id}
        />
      ) : (
        <NoTasksFound>No tasks found...</NoTasksFound>
      )}
    </Container>
  );
};

export default connector(TaskComponent);

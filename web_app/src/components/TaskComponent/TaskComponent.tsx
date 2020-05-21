import React, { FunctionComponent } from "react";
import { RootState } from "src/data/types";
import { selectTasksByParentId } from "src/data/redux/task/task.selectors";
import { fetchTasks, addTask } from "src/data/redux/task/task.actions";
import { connect, ConnectedProps } from "react-redux";
import TaskList from "../TaskList/TaskList";

type OwnProps = {
  parentId: number;
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

const TaskComponent: FunctionComponent<OwnProps & PropsFromRedux> = ({
  parentId,
  fetchTasks,
  tasks,
  addTask,
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTaskText(event.target.value)}
          value={taskText}
        />
      </form>
      {hasTasks ? <TaskList tasks={tasks} /> : <div>No tasks found!</div>}
    </div>
  );
};

export default connector(TaskComponent);

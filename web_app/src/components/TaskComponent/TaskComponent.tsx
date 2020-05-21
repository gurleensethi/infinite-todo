import React, { FunctionComponent } from "react";
import { RootState } from "src/data/types";
import { selectTasksByParentId } from "src/data/redux/task/task.selectors";
import { fetchTasks } from "src/data/redux/task/task.actions";
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
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TaskComponent: FunctionComponent<OwnProps & PropsFromRedux> = ({
  parentId,
  fetchTasks,
  tasks,
}) => {
  React.useEffect(() => {
    fetchTasks(parentId);
  }, [parentId, fetchTasks]);

  if (!tasks || !tasks.length) {
    return <div>No tasks found.</div>;
  }

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default connector(TaskComponent);

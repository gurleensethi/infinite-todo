import React, { FunctionComponent } from "react";
import { Task } from "src/data/types";
import TaskListItem from "./TaskListItem";

interface Props {
  selectedTaskId: string | undefined;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
  onEditTask: (task: Task) => void;
}

const TaskList: FunctionComponent<Props> = ({
  tasks,
  onTaskClick,
  onDeleteTask,
  onEditTask,
  selectedTaskId,
}) => {
  if (!tasks || tasks.length === 0) {
    return null;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskListItem
            key={task.id}
            task={task}
            onTaskClick={() => onTaskClick(task)}
            onDeleteTask={() => onDeleteTask(task)}
            onEditTask={() => onEditTask(task)}
            isSelected={selectedTaskId === task.id}
          >
            {task.content}
          </TaskListItem>
        );
      })}
    </div>
  );
};

export default React.memo(TaskList);

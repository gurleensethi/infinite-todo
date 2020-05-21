import React, { FunctionComponent } from "react";
import TaskComponent from "src/components/TaskComponent/TaskComponent";
import { Task } from "src/data/types";

export const Home: FunctionComponent = (props) => {
  const [openPanels, setOpenPanels] = React.useState<number[]>([-1]);

  const handleOnTaskClick = (task: Task, index: number) => {
    setOpenPanels([...openPanels.slice(0, index + 1), task.id]);
  };

  return (
    <div>
      {openPanels.map((panelId, index) => (
        <TaskComponent
          parentId={panelId}
          key={panelId}
          onTaskClick={(task) => handleOnTaskClick(task, index)}
        />
      ))}
    </div>
  );
};

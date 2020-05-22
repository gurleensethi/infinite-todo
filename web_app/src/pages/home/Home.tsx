import React, { FunctionComponent } from "react";
import TaskComponent from "src/components/TaskComponent/TaskComponent";
import { Task } from "src/data/types";
import styled from "styled-components";

/* Styles */
const Container = styled.div`
  overflow-y: auto;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

/* Component */
export const Home: FunctionComponent = (props) => {
  const [openPanels, setOpenPanels] = React.useState<number[]>([-1]);
  const containerRef = React.useRef<HTMLDivElement | null>();

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  });

  const handleRef = (ref: HTMLDivElement | null) => {
    containerRef.current = ref;
  };

  const handleOnTaskClick = (task: Task, index: number) => {
    setOpenPanels([...openPanels.slice(0, index + 1), task.id]);
  };

  return (
    <Container ref={handleRef}>
      {openPanels.map((panelId, index) => (
        <div
          style={{
            display: "inline-block",
            width: "100%",
            height: "100%",
            maxWidth: "500px",
          }}
          key={panelId}
        >
          <TaskComponent
            parentId={panelId}
            onTaskClick={(task) => handleOnTaskClick(task, index)}
            selectedTaskId={openPanels[index + 1]}
          />
        </div>
      ))}
    </Container>
  );
};

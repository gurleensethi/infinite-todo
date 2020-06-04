import React, { FunctionComponent } from "react";
import TaskComponent from "src/components/TaskComponent/TaskComponent";
import { Task, RootState, SETTINGS_MODAL } from "src/data/types";
import styled from "styled-components";
import TopBar from "src/components/TopBar/TopBar";
import { showModal } from "src/data/redux/ui/ui.actions";
import { connect, ConnectedProps } from "react-redux";

/* Styles */
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Panels = styled.div`
  overflow-y: auto;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

/* Props and State */
interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {};
};

const mapDispatchToProps = {
  showDialog: showModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

/* Component */
const Home: FunctionComponent<PropsFromRedux> = ({ showDialog }) => {
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

  const handleDeleteTask = (task: Task, index: number) => {
    // Next opened panel contains sub tasks of current task.
    if (openPanels[index + 1] === task.id) {
      setOpenPanels(openPanels.slice(0, index + 1));
    }
  };

  return (
    <Container>
      <TopBar
        title="Infinity Todo"
        actions={[
          {
            iconName: "settings",
            onClick: () => {
              showDialog({ type: SETTINGS_MODAL });
            },
          },
        ]}
      />
      <Panels ref={handleRef}>
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
              onDeleteTask={(task) => handleDeleteTask(task, index)}
              selectedTaskId={openPanels[index + 1]}
            />
          </div>
        ))}
      </Panels>
    </Container>
  );
};

export default connector(Home);

import React, { FunctionComponent } from "react";
import TaskComponent from "src/components/task-component/TaskComponent";
import { Task, RootState, SETTINGS_MODAL } from "src/data/types";
import styled from "styled-components";
import TopBar from "src/components/top-bar/TopBar";
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

// Todo: Move somewhere else
const rootTask: Task = {
  id: "-1",
  createdAt: Date.now(),
  isComplete: false,
  parentId: "-2",
  content: "Home",
  hasSubtasks: false,
};

/* Component */
const Home: FunctionComponent<PropsFromRedux> = ({ showDialog }) => {
  const [openTasks, setOpenTasks] = React.useState<Task[]>([rootTask]);
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
    setOpenTasks([...openTasks.slice(0, index + 1), task]);
  };

  const handleDeleteTask = (task: Task, index: number) => {
    // Next opened panel contains sub tasks of current task.
    if (openTasks[index + 1]?.id === task.id) {
      setOpenTasks(openTasks.slice(0, index + 1));
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
        {openTasks.map((task, index) => {
          return (
            <div
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                maxWidth: "500px",
              }}
              key={task.id}
            >
              <TaskComponent
                parentTask={task}
                onTaskClick={(task) => handleOnTaskClick(task, index)}
                onDeleteTask={(task) => handleDeleteTask(task, index)}
                selectedTask={openTasks[index + 1]}
              />
            </div>
          );
        })}
      </Panels>
    </Container>
  );
};

export default connector(Home);

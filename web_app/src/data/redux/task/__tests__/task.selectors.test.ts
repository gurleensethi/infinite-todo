import { selectTasksByParentId } from "../task.selectors";
import configureStore from "redux-mock-store";
import { RootState, Task } from "src/data/types";

describe("Task Selectors", () => {
  const mockStore = configureStore<RootState>();
  const task1: Task = {
    id: "1",
    parentId: "-1",
    content: "Testing",
    createdAt: Date.now(),
    isComplete: false,
    hasSubtasks: false,
  };

  const task2: Task = {
    id: "2",
    parentId: "1",
    content: "Testing",
    createdAt: Date.now(),
    isComplete: false,
    hasSubtasks: false,
  };

  it("should select tasks with parent", () => {
    const store = mockStore({
      tasks: {
        tasks: {
          "-1": [task1],
          "1": [task2],
        },
      },
      ui: {
        modals: [],
      },
    });

    const expectedTasks = [task1];

    const tasks = selectTasksByParentId(store.getState(), "-1");

    expect(tasks).toEqual(expectedTasks);
  });
});

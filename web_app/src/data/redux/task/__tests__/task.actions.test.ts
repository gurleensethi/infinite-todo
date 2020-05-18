import { fetchTaskFinished, addTaskFinished } from "../task.actions";
import {
  FetchTasksFinishAction,
  FETCH_TASK_FINISH,
  AddTaskFinishAction,
  ADD_TASK_FINISH,
} from "../task.types";
import { Task } from "src/data/types";

describe("Task actions creators", () => {
  it("should create an action to fetch all tasks", () => {
    const expectedAction: FetchTasksFinishAction = {
      parentId: 1,
      tasks: [],
      type: FETCH_TASK_FINISH,
    };

    expect(fetchTaskFinished(1, [])).toEqual(expectedAction);
  });

  it("should create an action to finish add task", () => {
    const task: Task = {
      id: 1,
      content: "testing",
      createdAt: 123,
      isComplete: false,
    };

    const expectedAction: AddTaskFinishAction = {
      task,
      type: ADD_TASK_FINISH,
    };

    expect(addTaskFinished(task)).toEqual(expectedAction);
  });
});

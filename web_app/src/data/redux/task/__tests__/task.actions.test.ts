import {
  fetchTaskFinished,
  addTaskFinished,
  updateTaskFinished,
  fetchTasks,
} from "../task.actions";
import {
  FetchTasksFinishAction,
  FETCH_TASK_FINISH,
  AddTaskFinishAction,
  ADD_TASK_FINISH,
  UpdateTaskFinishAction,
  UPDATE_TASK_FINISH,
  TaskAction,
  FETCH_TASK_REQUEST,
} from "../task.types";
import { Task, AppThunkMiddleware, RootState } from "src/data/types";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TaskService } from "src/data/services/task.service";
import createMockInstance from "jest-create-mock-instance";
import ServiceLocator from "src/data/services/service-locator";
import { Action } from "redux";

describe("Task actions creators", () => {
  const task: Task = {
    id: 1,
    content: "testing",
    createdAt: 123,
    isComplete: false,
  };

  const taskService: jest.Mocked<TaskService> = createMockInstance(TaskService);
  const serviceLocator = new ServiceLocator();
  const mockStore = configureMockStore<
    RootState,
    ThunkDispatch<RootState, ServiceLocator, Action<string>>
  >([thunk.withExtraArgument(serviceLocator) as AppThunkMiddleware]);
  serviceLocator.registerSingleton(TaskService, taskService);

  it("should create an action to fetch all tasks", () => {
    const expectedAction: FetchTasksFinishAction = {
      parentId: 1,
      tasks: [task],
      type: FETCH_TASK_FINISH,
    };

    expect(fetchTaskFinished(1, [task])).toEqual(expectedAction);
  });

  it("should create an action to finish add task", () => {
    const expectedAction: AddTaskFinishAction = {
      task,
      type: ADD_TASK_FINISH,
    };

    expect(addTaskFinished(task)).toEqual(expectedAction);
  });

  it("should create an action to finish task update", () => {
    const expectedAction: UpdateTaskFinishAction = {
      task,
      type: UPDATE_TASK_FINISH,
    };
    expect(updateTaskFinished(task)).toEqual(expectedAction);
  });

  it("should create an action that fetches the tasks", async () => {
    const store = mockStore({ tasks: { tasks: [] } });

    const expectedActions: TaskAction[] = [
      { type: FETCH_TASK_REQUEST, parentId: null },
      { type: FETCH_TASK_FINISH, parentId: null, tasks: [task] },
    ];

    taskService.getAll.mockResolvedValue([task]);

    await store.dispatch(fetchTasks(null));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

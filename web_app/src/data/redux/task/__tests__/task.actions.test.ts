import {
  fetchTaskFinished,
  addTaskFinished,
  updateTaskFinished,
  fetchTasks,
  deleteTaskFinished,
  addTaskRequest,
  addTask,
  deleteTaskRequest,
  deleteTask,
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
  DeleteTaskFinishAction,
  DELETE_TASK_FINISH,
  AddTaskRequestAction,
  ADD_TASK_REQUEST,
  DeleteTaskRequestAction,
  DELETE_TASK_REQUEST,
} from "../task.types";
import {
  Task,
  AppThunkMiddleware,
  RootState,
  AddTaskData,
} from "src/data/types";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TaskService } from "src/data/services/task.service";
import createMockInstance from "jest-create-mock-instance";
import ServiceLocator from "src/data/services/service-locator";
import { Action } from "redux";

describe("Task actions creators", () => {
  const task: Task = {
    parentId: "-1",
    id: "1",
    content: "This is a test",
    createdAt: 123,
    isComplete: false,
    hasSubtasks: false,
  };

  const initalStoreState = { tasks: { tasks: {} }, ui: { modals: [] } };

  const createTaskData: AddTaskData = {
    content: "This is a test",
    parentId: "-1",
  };

  const taskService: jest.Mocked<TaskService> = createMockInstance(TaskService);
  const serviceLocator = new ServiceLocator();
  const mockStore = configureMockStore<
    RootState,
    ThunkDispatch<RootState, ServiceLocator, Action<string>>
  >([thunk.withExtraArgument(serviceLocator) as AppThunkMiddleware]);
  serviceLocator.registerSingleton(TaskService, taskService);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create an action to fetch all tasks", () => {
    const expectedAction: FetchTasksFinishAction = {
      parentId: "1",
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

  it("should create action to create a task", async () => {
    const store = mockStore(initalStoreState);

    const expectedActions: TaskAction[] = [
      { type: ADD_TASK_REQUEST, data: createTaskData },
      { type: ADD_TASK_FINISH, task },
    ];

    taskService.createTask.mockResolvedValue(task);

    await store.dispatch(addTask(createTaskData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should create an action that fetches the tasks", async () => {
    const store = mockStore(initalStoreState);

    const expectedActions: TaskAction[] = [
      { type: FETCH_TASK_REQUEST, parentId: "-1" },
      { type: FETCH_TASK_FINISH, parentId: "-1", tasks: [task] },
    ];

    taskService.getTasksByParentId.mockResolvedValue([task]);

    await store.dispatch(fetchTasks("-1"));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should create an action to finish delete task", () => {
    const expectedAction: DeleteTaskFinishAction = {
      task,
      type: DELETE_TASK_FINISH,
    };
    expect(deleteTaskFinished(task)).toEqual(expectedAction);
  });

  it("should create an action to request add task", () => {
    const expectedAction: AddTaskRequestAction = {
      type: ADD_TASK_REQUEST,
      data: createTaskData,
    };
    expect(addTaskRequest(createTaskData)).toEqual(expectedAction);
  });

  it("should create an action to request delete task", () => {
    const expectedAction: DeleteTaskRequestAction = {
      type: DELETE_TASK_REQUEST,
      task,
    };
    expect(deleteTaskRequest(task)).toEqual(expectedAction);
  });

  it("should dispatch actions to delete a task", async () => {
    const store = mockStore(initalStoreState);

    const expectedActions: TaskAction[] = [
      { type: DELETE_TASK_REQUEST, task },
      { type: DELETE_TASK_FINISH, task },
    ];

    await store.dispatch(deleteTask(task));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

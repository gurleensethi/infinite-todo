import {
  FetchTasksFinishAction,
  FETCH_TASK_FINISH,
  FETCH_TASK_REQUEST,
  AddTaskFinishAction,
  ADD_TASK_FINISH,
  UpdateTaskFinishAction,
  UPDATE_TASK_FINISH,
  DeleteTaskFinishAction,
  DELETE_TASK_FINISH,
  ADD_TASK_REQUEST,
  AddTaskRequestAction,
  FetchTasksRequestAction,
  DeleteTaskRequestAction,
  DELETE_TASK_REQUEST,
  DeleteAllTasksFinishAction,
  DELETE_ALL_TASKS_FINISH,
  DeleteAllTasksRequestAction,
  DELETE_ALL_TASKS_REQUEST,
  UpdateTaskRequestAction,
  UPDATE_TASK_REQUEST,
} from "./task.types";
import { Task, AppThunk, AddTaskData, UpdateTaskData } from "src/data/types";
import { TaskService } from "src/data/services/task.service";

export const fetchTaskRequest = (parentId: string): FetchTasksRequestAction => {
  return {
    parentId,
    type: FETCH_TASK_REQUEST,
  };
};

export const fetchTaskFinished = (
  parentId: string,
  tasks: Task[]
): FetchTasksFinishAction => {
  return {
    type: FETCH_TASK_FINISH,
    parentId,
    tasks,
  };
};

export const addTaskRequest = (data: AddTaskData): AddTaskRequestAction => {
  return {
    data,
    type: ADD_TASK_REQUEST,
  };
};

export const addTaskFinished = (task: Task): AddTaskFinishAction => {
  return {
    task,
    type: ADD_TASK_FINISH,
  };
};

export const updateTaskRequest = (
  id: string,
  data: UpdateTaskData
): UpdateTaskRequestAction => {
  return {
    id,
    data,
    type: UPDATE_TASK_REQUEST,
  };
};

export const updateTaskFinished = (task: Task): UpdateTaskFinishAction => {
  return {
    task,
    type: UPDATE_TASK_FINISH,
  };
};

export const deleteTaskRequest = (task: Task): DeleteTaskRequestAction => {
  return {
    task,
    type: DELETE_TASK_REQUEST,
  };
};

export const deleteTaskFinished = (task: Task): DeleteTaskFinishAction => {
  return {
    task,
    type: DELETE_TASK_FINISH,
  };
};

export const deleteAllTasksRequest = (): DeleteAllTasksRequestAction => {
  return {
    type: DELETE_ALL_TASKS_REQUEST,
  };
};

export const deleteAllTasksFinished = (): DeleteAllTasksFinishAction => {
  return {
    type: DELETE_ALL_TASKS_FINISH,
  };
};

export const fetchTasks = (parentId: string): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(fetchTaskRequest(parentId));
    const taskService = serviceLocator.get(TaskService);
    const tasks = await taskService.getTasksByParentId(parentId);
    dispatch(fetchTaskFinished(parentId, tasks));
  };
};

export const addTask = (data: AddTaskData): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(addTaskRequest(data));
    const taskService = serviceLocator.get(TaskService);
    const task = await taskService.createTask(data);
    dispatch(addTaskFinished(task));
  };
};

export const deleteTask = (task: Task): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(deleteTaskRequest(task));
    const taskService = serviceLocator.get(TaskService);
    await taskService.deleteTask(task);
    dispatch(deleteTaskFinished(task));
  };
};

export const deleteAllTasks = (): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(deleteAllTasksRequest());
    const taskService = serviceLocator.get(TaskService);
    await taskService.deleteAllTasks();
    dispatch(deleteAllTasksFinished());
  };
};

export const updateTask = (
  id: string,
  data: UpdateTaskData
): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(updateTaskRequest(id, data));
    const taskService = serviceLocator.get(TaskService);
    const task = await taskService.updateTaskById(id, data);
    dispatch(updateTaskFinished(task));
  };
};

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
} from "./task.types";
import { Task, AppThunk, CreateTaskData } from "src/data/types";
import { TaskService } from "src/data/services/task.service";

export const fetchTaskRequest = (parentId: number): FetchTasksRequestAction => {
  return {
    parentId,
    type: FETCH_TASK_REQUEST,
  };
};

export const fetchTaskFinished = (
  parentId: number,
  tasks: Task[]
): FetchTasksFinishAction => {
  return {
    type: FETCH_TASK_FINISH,
    parentId,
    tasks,
  };
};

export const addTaskRequest = (data: CreateTaskData): AddTaskRequestAction => {
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

export const updateTaskFinished = (task: Task): UpdateTaskFinishAction => {
  return {
    task,
    type: UPDATE_TASK_FINISH,
  };
};

export const deleteTaskFinished = (task: Task): DeleteTaskFinishAction => {
  return {
    task,
    type: DELETE_TASK_FINISH,
  };
};

export const fetchTasks = (parentId: number): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(fetchTaskRequest(parentId));
    const taskService = serviceLocator.get(TaskService);
    const tasks = await taskService.getAll(parentId);
    dispatch(fetchTaskFinished(parentId, tasks));
  };
};

export const createTask = (data: CreateTaskData): AppThunk<Promise<void>> => {
  return async (dispatch, getState, serviceLocator) => {
    dispatch(addTaskRequest(data));
    const taskService = serviceLocator.get(TaskService);
    const task = await taskService.createTask(data);
    dispatch(addTaskFinished(task));
  };
};

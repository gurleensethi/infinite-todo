import { Task, CreateTaskData } from "src/data/types";

export const FETCH_TASK_REQUEST = "FETCH_TASK_REQUEST";
export const FETCH_TASK_FINISH = "FETCH_TASK_FINISH";
export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_FINISH = "ADD_TASK_FINISH";
export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const UPDATE_TASK_FINISH = "UPDATE_TASK_FINISH";
export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_FINISH = "DELETE_TASK_FINISH";

export interface FetchTasksRequestAction {
  type: typeof FETCH_TASK_REQUEST;
  parentId: number;
}

export interface FetchTasksFinishAction {
  type: typeof FETCH_TASK_FINISH;
  parentId: number;
  tasks: Task[];
}

export interface AddTaskRequestAction {
  type: typeof ADD_TASK_REQUEST;
  data: CreateTaskData;
}

export interface AddTaskFinishAction {
  type: typeof ADD_TASK_FINISH;
  task: Task;
}

export interface UpdateTaskRequestAction {
  type: typeof UPDATE_TASK_REQUEST;
  task: Task;
}

export interface UpdateTaskFinishAction {
  type: typeof UPDATE_TASK_FINISH;
  task: Task;
}

export interface DeleteTaskRequestAction {
  type: typeof DELETE_TASK_REQUEST;
  task: Task;
}

export interface DeleteTaskFinishAction {
  type: typeof DELETE_TASK_FINISH;
  task: Task;
}

export interface TaskState {
  tasks: Record<number, Task[]>;
}

export type TaskAction =
  | AddTaskFinishAction
  | AddTaskRequestAction
  | DeleteTaskFinishAction
  | DeleteTaskRequestAction
  | UpdateTaskFinishAction
  | UpdateTaskRequestAction
  | FetchTasksFinishAction
  | FetchTasksRequestAction;

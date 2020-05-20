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
} from "./task.types";
import { Task, AppThunk } from "src/data/types";
import { Dispatch } from "redux";
import { TaskService } from "src/data/services/task.service";

export const fetchTaskFinished = (
  parentId: number | undefined | null,
  tasks: Task[]
): FetchTasksFinishAction => {
  return {
    type: FETCH_TASK_FINISH,
    parentId,
    tasks,
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

export const fetchTasks = (
  parentId: number | undefined | null
): AppThunk<Promise<void>> => {
  return async (dispatch: Dispatch, getState, serviceLocator) => {
    dispatch({ type: FETCH_TASK_REQUEST, parentId });
    const taskService = serviceLocator.get(TaskService);
    const tasks = await taskService.getAll();
    dispatch(fetchTaskFinished(parentId, tasks));
  };
};

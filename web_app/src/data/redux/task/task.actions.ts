import {
  FetchTasksFinishAction,
  FETCH_TASK_FINISH,
  FETCH_TASK_REQUEST,
  AddTaskFinishAction,
  ADD_TASK_FINISH,
  UpdateTaskFinishAction,
  UPDATE_TASK_FINISH,
} from "./task.types";
import { Task } from "src/data/types";
import { Dispatch } from "redux";

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

export const fetchTasks = (parentId: number | undefined) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_TASK_REQUEST, parentId });
    dispatch(fetchTaskFinished(parentId, []));
  };
};

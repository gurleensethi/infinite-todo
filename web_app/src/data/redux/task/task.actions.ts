import {
  FetchTasksFinishAction,
  FETCH_TASK_FINISH,
  FETCH_TASK_REQUEST,
} from "./task.types";
import { Task } from "data/types";
import { Dispatch } from "redux";

const createFetchTaskFinished = (
  parentId: number | undefined | null,
  tasks: Task[]
): FetchTasksFinishAction => {
  return {
    type: FETCH_TASK_FINISH,
    parentId,
    tasks,
  };
};

export const fetchTasks = (parentId: number | undefined) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_TASK_REQUEST, parentId });
    dispatch(createFetchTaskFinished(parentId, []));
  };
};

import { createSelector } from "reselect";
import { RootState, Task } from "src/data/types";

export const getTaskByParentId = createSelector<
  RootState,
  number,
  Record<number, Task[]>,
  number,
  Task[]
>(
  (state: RootState) => state.tasks.tasks,
  (state: RootState, parentId: number) => parentId,
  (tasks, parentId) => tasks[parentId]
);

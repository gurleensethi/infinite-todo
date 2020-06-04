import { createSelector } from "reselect";
import { RootState, Task } from "src/data/types";

export const selectTasksByParentId = createSelector<
  RootState,
  string,
  Record<string, Task[] | undefined>,
  string,
  Task[]
>(
  (state: RootState) => state.tasks.tasks,
  (state: RootState, parentId: string) => parentId,
  (tasks, parentId) => tasks[parentId] || []
);

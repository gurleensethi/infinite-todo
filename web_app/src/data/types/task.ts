export interface Task {
  id: string;
  content: string;
  createdAt: number;
  isComplete: boolean;
  parentId: string;
  hasSubtasks: boolean;
}

export type AddTaskData = Omit<
  Task,
  "id" | "createdAt" | "isComplete" | "hasSubtasks"
>;

export type UpdateTaskData = Partial<Omit<Task, "id">>;

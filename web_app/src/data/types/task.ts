export interface Task {
  id: number;
  content: string;
  createdAt: number;
  isComplete: boolean;
  parentId: number;
}

export type AddTaskData = Omit<Task, "id" | "createdAt" | "isComplete">;

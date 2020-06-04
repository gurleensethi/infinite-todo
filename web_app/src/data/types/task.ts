export interface Task {
  id: string;
  content: string;
  createdAt: number;
  isComplete: boolean;
  parentId: string;
}

export type AddTaskData = Omit<Task, "id" | "createdAt" | "isComplete">;

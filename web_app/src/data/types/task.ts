export interface Task {
  id: number;
  content: string;
  createdAt: number;
  isComplete: boolean;
  parentId: number;
}

export type CreateTaskData = Omit<Task, "id" | "createdAt" | "isComplete">;

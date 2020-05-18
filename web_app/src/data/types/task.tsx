export interface Task {
  id: number;
  content: string;
  createdAt: number;
  isComplete: boolean;
}

export type CreateTaskData = Omit<Task, "id" | "createdAt" | "isComplete">;

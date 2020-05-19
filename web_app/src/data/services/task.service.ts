import { Task } from "src/data/types";

export class TaskService {
  private tasks: Task[] = [];

  public async getAll(): Promise<Task[]> {
    return this.tasks;
  }
}

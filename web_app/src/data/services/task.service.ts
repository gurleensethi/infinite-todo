import { Task, AddTaskData } from "src/data/types";

export class TaskService {
  private tasks: Task[] = [];

  public async getAll(
    parentId: number | undefined = undefined
  ): Promise<Task[]> {
    return this.tasks.filter((task) => task.parentId === parentId);
  }

  public async getById(id: number): Promise<Task | undefined> {
    return this.tasks.find((task) => task.id === id);
  }

  public async createTask(data: AddTaskData): Promise<Task> {
    const task: Task = {
      ...data,
      createdAt: Date.now(),
      id: this.tasks.length + 1,
      isComplete: false,
    };
    this.tasks.push(task);
    return task;
  }

  public async deleteTask(task: Task): Promise<void> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }
}

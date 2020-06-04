import { Task, AddTaskData } from "src/data/types";

export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    this.tasks = tasks;
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public async getAll() {
    return this.tasks;
  }

  public async getTasksByParentId(
    parentId: string | undefined = undefined
  ): Promise<Task[]> {
    return this.tasks.filter((task) => task.parentId === parentId);
  }

  public async getById(id: string): Promise<Task | undefined> {
    return this.tasks.find((task) => task.id === id);
  }

  public async createTask(data: AddTaskData): Promise<Task> {
    const task: Task = {
      ...data,
      createdAt: Date.now(),
      id: `${Date.now()}-${Math.random() * Math.random() * Math.random()}`,
      isComplete: false,
    };
    this.tasks.push(task);
    this.saveTasks();
    return task;
  }

  public async deleteTask(task: Task): Promise<void> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index >= 0) {
      let taskToDelete = this.tasks[index];
      const taskIdsToDelete: Set<string> = new Set();
      taskIdsToDelete.add(taskToDelete.id);
      const tasksqueue: Task[] = [taskToDelete];
      while (tasksqueue.length) {
        const task = tasksqueue.shift();
        const tasks = await this.getTasksByParentId(task?.id);
        tasksqueue.push(...tasks);
        tasks.forEach((task) => taskIdsToDelete.add(task.id));
      }
      this.tasks = this.tasks.filter((task) => !taskIdsToDelete.has(task.id));
      this.saveTasks();
    }
  }

  public deleteAllTasks = async (): Promise<void> => {
    this.tasks = [];
    this.saveTasks();
  };
}

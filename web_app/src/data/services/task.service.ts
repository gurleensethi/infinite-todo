import { Task, AddTaskData } from "src/data/types";

export class TaskService {
  private tasks: Task[] = [
    // TODO: Remove initial task
    {
      id: 0,
      parentId: -1,
      content: "Docker Stack: Docker stacks course ... .dsf.sd fsf dsf sd f",
      createdAt: Date.now(),
      isComplete: false,
    },
  ];

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
    this.saveTasks();
    return task;
  }

  public async deleteTask(task: Task): Promise<void> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index >= 0) {
      let task = this.tasks[index];
      const tasksToDelete: number[] = [task.id];
      let position = 0;
      while (true) {
        const tasks = await this.getTasksByParentId(tasksToDelete[position]);
        if (tasks.length === 0) {
          break;
        }
        tasksToDelete.push(...tasks.map((task) => task.id));
        position++;
      }
      const taskIdsToDelete = new Set(tasksToDelete);
      this.tasks = this.tasks.filter((task) => !taskIdsToDelete.has(task.id));
      this.saveTasks();
    }
  }
}

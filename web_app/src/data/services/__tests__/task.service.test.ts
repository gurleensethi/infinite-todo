import { TaskService } from "../task.service";
import { Task, AddTaskData } from "src/data/types";

describe("TaskService", () => {
  let taskService: TaskService;
  let taskA: Task;
  let taskB: Task;
  let taskC: Task;
  let taskD: Task;

  beforeEach(async () => {
    localStorage.setItem("tasks", "[]");

    taskService = new TaskService();

    taskA = await taskService.createTask({
      content: "Task A",
      parentId: "-1",
    });

    taskB = await taskService.createTask({
      content: "Task B",
      parentId: taskA.id,
    });

    taskC = await taskService.createTask({
      content: "Task C",
      parentId: taskB.id,
    });

    taskD = await taskService.createTask({
      content: "Task D",
      parentId: "-1",
    });
  });

  it("should add task", async () => {
    const taskData: AddTaskData = {
      content: "Testing",
      parentId: "-1",
    };
    let tasks = await taskService.getAll();
    const initialCount = tasks.length;
    const task = await taskService.createTask(taskData);
    tasks = await taskService.getAll();
    expect(tasks.length).toEqual(initialCount + 1);
    expect(task).toMatchObject(taskData);
  });

  it("should delete all required tasks", async () => {
    const expectedTasks = [taskD];
    await taskService.deleteTask(taskA);
    const tasks = await taskService.getAll();
    expect(tasks).toEqual(expectedTasks);
  });

  it("should delete all tasks", async () => {
    const expectedTasks: Task[] = [];
    await taskService.deleteAllTasks();
    const tasks = await taskService.getAll();
    expect(tasks).toEqual(expectedTasks);
  });

  it("should update task with provided data", async () => {
    const task = await taskService.updateTaskById(taskA.id, {
      isComplete: true,
      content: "New Content",
    });

    expect(task).toEqual({
      ...taskA,
      isComplete: true,
      content: "New Content",
    });
  });
});

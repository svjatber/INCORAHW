import { Task } from './Task';

interface Project {
  tasks: Task[];
  addTask(task: Task): void;
  editTask(task: Partial<Task>): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): Task[];
}

class ProjectClass implements Project {
  public tasks: Task[] = [];

  constructor() {}

  addTask(task: Task) {
    this.tasks.push(task);
  }
  editTask(task: Partial<Task>) {
    this.tasks.map(t => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  getTotalTime(): number {
    const time = this.tasks.reduce((accumulator: number, task: Task) => {
      accumulator += task.durationInMin;
      return accumulator;
    }, 0);
    return time;
  }
  getAllTasksByDeveloper(id: number): Task[] {
    return this.tasks.filter(v => v.developer.id === id);
  }
}
export default ProjectClass;

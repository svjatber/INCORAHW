import { User } from './User';

export interface Task {
  id: number;
  durationInMin: number;
  completed: boolean;
  developer: User;
  title: string;
  getInfo(): string;
}

class TaskClass implements Task {
  public id: number = 0;
  constructor(
    public durationInMin: number,
    public completed: boolean,
    public developer: User,
    public title: string
  ) {
    this.id = +new Date().getTime();
  }
  public set setId(id: number) {
    this.id = id;
  }
  getInfo(): string {
    return `${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}`;
  }
}
export default TaskClass;

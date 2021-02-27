import ts from 'typescript/lib/tsserverlibrary';
import Project = ts.server.Project;

export interface App {
  name: string;
  setName(name: string): void;
  projects: Project[];
  addProject(project: Project): void;
}
class AppClass implements App {
  public projects: Project[] = [];
  constructor(public name: string) {
    this.name = name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  addProject(project: Project): void {
    this.projects.push(project);
  }
}
export default AppClass;

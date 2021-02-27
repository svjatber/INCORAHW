export interface User {
  id: number;
  name: string;
}
class UserClass implements User {
  public id: number = 0;
  constructor(public name: string) {
    this.id = +new Date().getTime();
  }
}
export default UserClass;

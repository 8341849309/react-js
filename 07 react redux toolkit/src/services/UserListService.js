import Axios from "axios";

export default class UserListService {
  static getAllUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    return Axios.get(URL);
  }
}

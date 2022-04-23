import Axios from "axios";

class UserService {
  static getAllFriends() {
    let serverUrl = "https://jsonplaceholder.typicode.com/users";
    return Axios.get(serverUrl);
  }
}

export default UserService;

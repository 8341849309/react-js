import Axios from "axios";

class ConstactService {
  static getAllContactList() {
    let URL = "https://jsonplaceholder.typicode.com/photos";

    return Axios.get(URL);
  }
}

export default ConstactService;

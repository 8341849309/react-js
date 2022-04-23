import counterReducer from "./features/counterfeature";
import employeeReducer from "./features/employeesfeature";
import userReducer from "./features/userfeature";

const rootReducer = {
  counter: counterReducer,
  employees: employeeReducer,
  users: userReducer,
};

export default rootReducer;

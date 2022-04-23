import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../redux/features/employeesfeature";

const EmployeeListRedux = (props) => {
  const dispatch = useDispatch();

  const employeeState = useSelector((store) => {
    return store["employees"];
  });

  const { employees } = employeeState;

  const updateEmployee = (empId) => {
    dispatch(getAllEmployees(empId));
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">Employees</p>
            <p>
              The .navbar-brand can be applied to most elements, but an anchor
              works best, as some elements might require utility classes or
              custom styles.The .navbar-brand can be applied to most elements,
              but an anchor works best, as some elements might require utility
              classes or custom styles.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <table className="table table-stripped table-hover">
              <tbody>
                {employees.map(function (emp, index) {
                  return (
                    <tr
                      key={index}
                      onChange={() => {
                        updateEmployee(emp.id);
                      }}
                    >
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={emp.name}
                          checked={emp.isSelected}
                          readOnly
                        />
                        <span className="ms-2"> {emp.name}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <table className="table table-stripped table-hover">
              <tbody>
                {employees.map((emp, index) => {
                  return (
                    emp.isSelected && (
                      <tr key={index}>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmployeeListRedux;

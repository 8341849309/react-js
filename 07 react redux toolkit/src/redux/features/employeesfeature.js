import { createSlice } from "@reduxjs/toolkit";
import EmployeeListService from "../../services/EmployeeListService";
const initialState = {
  employees: EmployeeListService.getAllEmployees(),
};

let employeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    getAllEmployees: function (state, action) {
      let selectedEmps = state.employees.map((emp) => {
        if (emp.id === action.payload) {
          return {
            ...emp,
            isSelected: !emp.isSelected,
          };
        } else return emp;
      });

      state.employees = selectedEmps;
    },
  },
});

export const { getAllEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;

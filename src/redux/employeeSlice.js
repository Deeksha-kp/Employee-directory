import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    editEmployee: (state, action) => {
      const { id, updatedEmployee } = action.payload;
      const index = state.employees.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        state.employees[index] = updatedEmployee;
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((employee) => employee.id !== action.payload);
    },
  },
});

export const { addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

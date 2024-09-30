import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';

// Function to load the state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('employees');
    if (serializedState === null) {
      return undefined; // Return undefined so that the reducers will use the initial state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save the state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('employees', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Create store with loaded state
const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  preloadedState: loadState(), // Load state from local storage
});

// Subscribe to store updates and save state to local storage
store.subscribe(() => {
  saveState({
    employees: store.getState().employees,
  });
});

export default store;
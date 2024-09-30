import React, { useState, useEffect } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './redux/employeeSlice';


const App = () => {
  const employees = useSelector((state) => state.employees.employees);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredEmployees(employees); // Update filtered employees when the employee list changes
  }, [employees]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const result = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(result);
    } else {
      setFilteredEmployees(employees); // Reset the filtered employees if search term is empty
    }
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployeeList = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setFilteredEmployees(updatedEmployeeList);
  };

  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id)); // Dispatch Redux action to delete the employee
    setFilteredEmployees(filteredEmployees.filter((employee) => employee.id !== id));
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Container>
        <h1 className="my-4">Employee Management</h1>
        <AddEmployee />
        <EmployeeList
          employees={filteredEmployees.length ? filteredEmployees : employees}
          onUpdateEmployee={handleUpdateEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </Container>
      
    </>
    
  );
};

export default App;

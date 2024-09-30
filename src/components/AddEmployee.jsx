import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import { Form, Button } from 'react-bootstrap';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    id: '',
    image: '',
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ ...employee, id: Date.now() }));
    setEmployee({ id: '', image: '', name: '', email: '', address: '' });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Label>Employee Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={employee.image}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Email ID</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          name="address"
          value={employee.address}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="info" type="submit" className="mt-2">
        Add Employee
      </Button>
    </Form>
  );
};

export default AddEmployee;

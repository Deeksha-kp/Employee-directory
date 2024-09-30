import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../redux/employeeSlice';
import { Button, Modal, Form } from 'react-bootstrap';

const EditEmployee = ({ employee, onUpdateEmployee }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState({ ...employee });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editEmployee({ id: employee.id, updatedEmployee }));
    onUpdateEmployee(updatedEmployee);
    handleClose();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="mt-2 me-2">
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Employee Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={updatedEmployee.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedEmployee.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={updatedEmployee.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditEmployee;

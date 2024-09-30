import React, { useState } from 'react';
import { Button, Card, Row, Col, Modal } from 'react-bootstrap';
import EditEmployee from './EditEmployee';

const EmployeeList = ({ employees = [], onUpdateEmployee, onDeleteEmployee }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (employee) => {
    setSelectedEmployee(employee);
    setShow(true);
  };

  return (
    <>
      <Row>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <Col key={employee.id} md={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={employee.image}
                  style={{ height: '250px', width: '100%', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title>{employee.name}</Card.Title>
                  <Card.Text>{employee.email}</Card.Text>
                  <Button
                    variant="info"
                    onClick={() => handleShow(employee)}
                    className="mt-2 me-2"
                  >
                    View
                  </Button>
                  <EditEmployee
                    employee={employee}
                    onUpdateEmployee={onUpdateEmployee}
                  />
                  <Button
                    variant="danger"
                    className="mt-2"
                    onClick={() => onDeleteEmployee(employee.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No employees available.</p>
        )}
      </Row>

      {selectedEmployee && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEmployee.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedEmployee.image}
              alt={selectedEmployee.name}
              style={{ height: '250px', width: '100%', objectFit: 'contain' }}
            />
            <h4>{selectedEmployee.email}</h4>
            <p>{selectedEmployee.address}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default EmployeeList;

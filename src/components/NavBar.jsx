import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Navbar bg="info" expand="lg" >
      <Container>
        <Navbar.Brand >
        <i className="fa-solid fa-user-tie" style={{color: "#3c060b",}} />
        {' '}
            Employee Directory</Navbar.Brand>
        {/* <Form className="d-flex ml-auto" onSubmit={(e) => e.preventDefault()}>
          <FormControl
            type="search"
            placeholder="Search by name"
            className="mr-4"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="dark" onClick={handleSearch}>
            Search
          </Button>
        </Form> */}
      </Container>
    </Navbar>
  );
};

export default NavBar;

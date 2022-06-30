import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import '../App.css';


const Headerone = () => {

  return (
    <div>
      <Navbar bg="primary" className='p-3' expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-white' id="ggg" href="#">ResponseNav</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link className='active' id="space" href="/home ">Home</Nav.Link>
            <Nav.Link id="space" href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link id="space" href="/services">Services</Nav.Link>
            <Nav.Link id="space" href="/products">Products</Nav.Link>
            <Nav.Link id="space" href="/aboutus">AboutUs</Nav.Link>
          </Nav>

          <Form className="d-flex " id='fff'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id="ffff" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Headerone;

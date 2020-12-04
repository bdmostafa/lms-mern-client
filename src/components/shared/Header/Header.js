import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <Nav.Link href="#link">Librarian</Nav.Link>
            <Nav.Link href="#link">Student</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Nav.Link href="#link" className="mr-sm-2">
            Login
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;

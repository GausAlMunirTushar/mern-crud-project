import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
const NavBar = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">List Table</Nav.Link>
                    <Nav.Link href="#">Create</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default NavBar;
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Header.scss';
// import logo from '../../constants/White on Transparent.png'

const Header: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg={"black"} variant="dark">
            <Navbar.Brand href="/">
                Tim's Kitchen
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/weekly-menu">Our Menu</Nav.Link>
                    <NavDropdown title="About Us" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Our Branches</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Our Customers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Book Online Meet</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>User Link 1</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        User Link 2
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

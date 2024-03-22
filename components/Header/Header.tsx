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
                    <Nav.Link href="#features">Link 1</Nav.Link>
                    <Nav.Link href="#pricing">Link 2</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">User Link 1</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        User Link 2
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

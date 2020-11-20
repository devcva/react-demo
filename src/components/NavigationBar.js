import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png'

export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect className="p-0 pl-2 pr-3" expand="lg" bg="primary" variant="dark" fixed="top" style={{fontSize: '20px'}}>
            <Navbar.Brand href="/" style={{fontSize: '30px', fontWeight: 'bold'}}>
                <img src={logo} alt="logo" className="pr-2" style={{ maxHeight: '100px' }}/>
                Siva Tech</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Product" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/product1">Product 1</NavDropdown.Item>
                        <NavDropdown.Item href="/product2">Product 2</NavDropdown.Item>
                        <NavDropdown.Item href="/product3">Product 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/product4">Product 4</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

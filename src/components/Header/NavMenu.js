import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavMenu = () => {
    return (
        <Navbar expand="lg" className='shadow-sm'>
            <Container>
                <Navbar.Toggle className='mx-auto' aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Dashboard</Nav.Link>
                        <Nav.Link href="#action2">Shop</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <Nav.Link href="#action2">Contact Us</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;
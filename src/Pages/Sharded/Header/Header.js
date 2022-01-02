import React from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate()
    const handleAddListing = () => {
        navigate('/addListing')
    }
    return (
        <div>
            <Navbar expand="lg" className='header' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src="https://classic.listingprowp.com/wp-content/uploads/2017/01/listingpro-logo.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-white" to="">Home</NavLink>
                            <NavLink className="text-white" to="">Category</NavLink>
                            <NavLink className="text-white" to="">Blog</NavLink>
                            <NavLink className="text-white" to="">Explore</NavLink>
                            <NavLink className="text-white" to='/contact'>Contact Us</NavLink>
                        </Nav>
                        <Button onClick={handleAddListing} variant="outline-light">Add Listing</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
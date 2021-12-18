import React from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleAddListing = () => {
        navigate('/addListing')
    }
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src="https://classic.listingprowp.com/wp-content/uploads/2017/01/listingpro-logo.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                            <Nav.Link className="text-white" href="#home">Category</Nav.Link>
                            <Nav.Link className="text-white" href="#home">Explore</Nav.Link>
                            <Nav.Link className="text-white" href="#home">Blog</Nav.Link>
                            <Nav.Link className="text-white" href="#home">Contact Us</Nav.Link>
                        </Nav>
                        <Button onClick={handleAddListing} variant="outline-light">Add Listing</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Image, Nav, Navbar, Button, DropdownButton, Dropdown, Col, Row, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import './Header.css';

const Header = () => {

    const { subCategory } = useListing();
    const navigate = useNavigate();

    const handleAddListing = () => {
        navigate('/dashboard')
    }

    const handleAllIndustry = () => {
        navigate('/industry')
    }
    const handleIndustry = industry => {
        navigate(`industryDetails/${industry}`)
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
                        <Nav className="ms-auto navbarMenu">
                            <NavLink className="text-white" to="">Home</NavLink>

                            <NavDropdown className='navDropdownBtn text-light' id="nav-dropdown-dark-example"
                                menuVariant="light" title="By Industry">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Dropdown.Item className='text-secondary fw-bold' onClick={handleAllIndustry} href="#">Views All Industries</Dropdown.Item>
                                    </Col>
                                    {
                                        subCategory?.map(list => <Col xs={12} md={6}>
                                            <div className='dropdownItem'>
                                                <Dropdown.Item onClick={() => handleIndustry(list?.name)} href="#">{list?.name}</Dropdown.Item>
                                            </div>
                                        </Col>)
                                    }
                                </Row>

                            </NavDropdown>
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
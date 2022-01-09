import React from 'react';
import { Container, Image, Nav, Navbar, Button, Dropdown, Col, Row, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import './Header.css';

const Header = () => {

    const { category } = useListing();
    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    const handleAllIndustry = () => {
        navigate('/industry')
    }
    const handleIndustry = industry => {
        navigate(`industryDetails/${industry}`)
    }
    const handleHome = () => {
        navigate('/')
    }

    // by investment 
    const handleAllInvestment = () => {
        navigate('/byInvestment')
    }
    const handleLevel = level => {
        navigate(`investmentDetails/${level}`)
    }

    return (
        <div>
            <Navbar expand="lg" className='header' variant="dark">
                <Container>
                    <Navbar.Brand onClick={handleHome} href="#">
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
                                        category?.map(list => <Col xs={12} md={6}>
                                            <div className='dropdownItem'>
                                                <Dropdown.Item onClick={() => handleIndustry(list?.name)} href="#">{list?.name}</Dropdown.Item>
                                            </div>
                                        </Col>)
                                    }
                                </Row>

                            </NavDropdown>
                            <NavDropdown className='navDropdownBtn text-light' id="nav-dropdown-dark-example"
                                menuVariant="light" title="By Investment">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Dropdown.Item className='text-secondary fw-bold' onClick={handleAllInvestment} href="#">Views All Level</Dropdown.Item>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(10000)} href="#">Under $10000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(20000)} href="#">Under $20000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(30000)} href="#">Under $30000</Dropdown.Item>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(50000)} href="#">Under $50000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(80000)} href="#">Under $80000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(100000)} href="#">Under $100000</Dropdown.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </NavDropdown>
                            <NavLink className="text-white" to="">Explore</NavLink>
                            <NavLink className="text-white" to='/contact'>Contact Us</NavLink>
                        </Nav>
                        <Button onClick={handleDashboard} variant="outline-light">Dashboard</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
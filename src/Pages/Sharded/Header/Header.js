import React from 'react';
import { Container, Image, Nav, Navbar, Dropdown, Col, Row, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import useListing from '../../../Hooks/useListing';
import './Header.css';

const Header = () => {

    const { category } = useListing();
    const navigate = useNavigate();
    const { user, logOut } = useFirebase();

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    const handleLogin = () => {
        navigate('/login')
    }
    const handleLogOut = () => {
        logOut()
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
                            <NavDropdown className='navDropdownBtn text-light' id="nav-dropdown-dark-example"
                                menuVariant="light" title="By Industry">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Dropdown.Item className='text-secondary fw-bold' onClick={handleAllIndustry} href="#">Views All Industries</Dropdown.Item>
                                    </Col>
                                    {
                                        category?.map(list => <Col key={list?._id} xs={12} md={6}>
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
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(150000)} href="#">Under $150000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(200000)} href="#">Under $200000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(250000)} href="#">Under $250000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(300000)} href="#">Under $300000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(350000)} href="#">Under $350000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(400000)} href="#">Under $400000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(450000)} href="#">Under $450000</Dropdown.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='dropdownItem'>
                                            <Dropdown.Item onClick={() => handleLevel(500000)} href="#">Under $500000</Dropdown.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </NavDropdown>
                            <NavLink className="text-white" to="">Explore</NavLink>
                            <NavLink className="text-white" to='/contact'>Contact Us</NavLink>
                        </Nav>

                        <Dropdown className='adminBtn'>
                            <Dropdown.Toggle className='userBttn' id="dropdown-basic">
                                <i className="fas fa-user-circle"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleDashboard} href="">Dashboard</Dropdown.Item>
                                {
                                    user?.email ? <button onClick={handleLogOut} className="btn btn-outline-dark ms-2 mt-1 rounded-3">Log Out</button>
                                        :
                                        <Dropdown.Item onClick={handleLogin} href="">login/Register</Dropdown.Item>
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
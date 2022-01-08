import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchListing from '../Listings/SearchListing/SearchListing';

const ByInvestment = () => {

    const navigate = useNavigate();

    const handleLevel = level => {
        navigate(`/investmentDetails/${level}`)
    }

    return (
        <div className='py-5'>
            <Container>
                <div className=''>
                    <SearchListing />
                </div>
                <Row>
                    <h2>Investment Level</h2>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(10000)}>Under $10000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(20000)}>Under $20000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(30000)}>Under $30000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(40000)}>Under $40000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(50000)}>Under $50000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(60000)}>Under $60000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(70000)}>Under $70000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(80000)}>Under $80000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(90000)}>Under $90000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(100000)}>Under $100000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(150000)}>Under $150000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(200000)}>Under $200000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(250000)}>Under $250000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(300000)}>Under $300000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(350000)}>Under $350000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(400000)}>Under $400000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(450000)}>Under $450000</li>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='py-2'>
                            <li onClick={() => handleLevel(500000)}>Under $500000</li>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

};

export default ByInvestment;
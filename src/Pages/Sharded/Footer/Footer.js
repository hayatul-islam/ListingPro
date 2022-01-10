import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='bg-black py-5 text-light'>
                <Container>
                    <Row>
                        <Col xs={6} lg={3}>
                            <div className='contact-container'>
                                <Image className='' src="https://classic.listingprowp.com/wp-content/uploads/2017/01/listingpro-logo.png" />
                                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex beatae ipsum delectus inventore in? Nulla natus dolores asperiores voluptatibus amet!</p>
                                <div className='d-flex text-dark social-media mt-4'>
                                    <div className='social-icon'>
                                        <i class="fab fa-facebook"></i>
                                    </div>
                                    <div className='social-icon'>
                                        <i class="fab fa-linkedin-in"></i>
                                    </div>
                                    <div className='social-icon'>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className='contact-container'>
                                <h3>About Us</h3>
                                <p>Home</p>
                                <p>About us</p>
                                <p>Top Listing</p>
                                <p>Training</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className='contact-container'>
                                <h3>Blog</h3>
                                <p>Blog 1</p>
                                <p>Blog 2</p>
                                <p>Blog 3</p>
                                <p>Blog 4</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className='contact-container'>
                                <h3>Contact Us</h3>
                                <div className='d-flex align-items-center mb-3'>
                                    <div className='social-icon'>
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <span className=''>info@gmail.com</span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <div className="social-icon">
                                        <i className="fas fa-phone-square"></i>
                                    </div>
                                    <span className=''>+880123456789</span>
                                </div>
                                <div className='d-flex align-items-center mb-3'>
                                    <div className="social-icon">
                                        <i className="fas fa-map-marker"></i>
                                    </div>
                                    <div>
                                        <h6 className='p-0 m-0'>Business Consultants</h6>
                                        <span>Dhaka Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-5'>
                        <hr />
                        <p className='text-center text-muted'>© 2021 Listing pro All rights Reserved.</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
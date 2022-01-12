import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Image, Row, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ListingDetails.css';
import emailjs from '@emailjs/browser';

const ListingDetails = () => {

    const { listingId } = useParams();
    const [singleListing, setSingleListing] = useState({});
    const { image, title, description, minCash, totalCash, investment } = singleListing;
    const form = useRef();
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {
                const findListing = data.find(listing => listing?._id === listingId);
                setSingleListing(findListing);
            })
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zisocw9', 'template_ou2du94', e.target, 'user_wCHYWdyeFu9Hugp30xAHD')
            .then((result) => {
                if (result.text) {
                    setMessage('Thank you! Your message has been sent!')
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div className='py-5 listingDetails'>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <div>
                            <Image className='' src={image} />

                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 sliderImage"
                                    src="https://previews.123rf.com/images/csiling1/csiling12006/csiling1200600525/149437424-webinar-online-learning-banner-background-with-icons.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100 sliderImage"
                                    src="https://t3.ftcdn.net/jpg/04/29/58/32/360_F_429583270_ByVcEkt4kIyagAS1gBychaTuSt3M7YR9.jpg "
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 sliderImage"
                                    src="http://www.uiu.ac.bd/wp-content/uploads/2019/10/Backdrop-Banner.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

                <h2 className='pt-5'>{title}</h2>
                <div className='businessInfoContainer'>
                    <div className='businessInfo'>
                        <p>Total Capital</p>
                        <h2>${totalCash}</h2>
                    </div>
                    <div className='businessInfo middleInfo'>
                        <p>Minimum Cash Required</p>
                        <h2>${minCash}</h2>
                    </div>
                    <div className='businessInfo'>
                        <p>Total Investment</p>
                        <h2>{investment}</h2>
                    </div>
                </div>
                <Row>
                    <Col xs={12} md={8}>
                        <div className='businessDetails'>
                            <div>

                                <h2>BUSINESS DETAILS</h2>
                                <hr />
                            </div>
                            <div>
                                <h5>About Us</h5>
                                <p>{description}</p>
                            </div>
                            <div>
                                <h5>Our Exclusive Curriculum</h5>
                                <p>Extending our mindful curriculum to digital learning, it introduces your child to new concepts and focusses on age-appropriate skill development.</p>
                            </div>
                        </div>
                        <div className='businessDetails'>
                            <div>
                                <h2>INVESTMENT DETAILS</h2>
                                <hr />
                            </div>
                            <div className='commonOperation'>
                                <h5>Commenced Operations</h5>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Operations Commenced On</p>
                                        <p>1977</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Franchise Commenced On</p>
                                        <p>2002</p>
                                    </div>
                                </div>
                                <div className='py-4'>
                                    <h5>Franchise Details</h5>

                                    <div className='businessUnitsContainer'>
                                        <div className='units'>
                                            <h5>UNITS</h5>
                                        </div>
                                        <div className='businessUnits'>
                                            <div className='d-flex justify-content-between'>
                                                <p>Investment</p>
                                                <p>{investment}</p>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <p>Franchise/Brand Fee</p>
                                                <p> ${minCash}</p>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <p>Royalty/Commission</p>
                                                <p>00%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='applyFrom'>
                            {
                                message ? <p className='text-info'>{message}</p> : ''
                            }
                            <h2 className='pb-3'>INSTA APPLY</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <input className='form-control mb-2' name='name' type="text" placeholder='Enter your name' />
                                <input className='form-control mb-2' name='email' type="email" placeholder='Enter your email' />
                                <input className='form-control mb-2' name='phone' type="number" placeholder='Enter your phone' />
                                <input className='form-control mb-2' name='country' type="text" placeholder='Country Name' />
                                <input className='form-control mb-2' name='city' type="text" placeholder='City Name' />
                                <textarea className='form-control mb-2' name="address" id="" cols="30" rows="5" placeholder='Address'></textarea>
                                <select className='w-100 py-2' name='investment' >
                                    <option value="">Select Investment Range</option>
                                    <option value="10000 - 50000">$10000 - $50000</option>
                                    <option value="50000 - 100000">$50000 - $100000</option>
                                    <option value="100000 - 150000">$100000 - $150000</option>
                                    <option value="150000 - 200000">$150000 - $200000</option>
                                    <option value="200000 - 250000">$200000 - $250000</option>
                                    <option value="250000 - 300000">$250000 - $300000</option>
                                    <option value="300000 - 350000">$300000 - $350000</option>
                                    <option value="350000 - 400000">$350000 - $400000</option>
                                    <option value="400000 - 450000">$400000 - $450000</option>
                                    <option value="450000 - 500000">$450000 - $500000</option>
                                    <option value="500000 - 1000000">$500000 - $1000000</option>
                                </select>
                                <div className='pt-3 d-flex align-items-center'>
                                    <input type="checkbox" required />
                                    <label className='ms-2' for="vehicle3"> I agree to the Terms & Conditions</label>
                                </div>
                                <div className="pt-3">
                                    <input className='btn btn-primary px-5 py-2' type="submit" value="Apply Now" />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default ListingDetails;
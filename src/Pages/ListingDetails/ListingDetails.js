import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './ListingDetails.css';

const ListingDetails = () => {

    const { listingId } = useParams();
    const [singleListing, setSingleListing] = useState({});
    const { image, title, description, minCash, totalCash, investment } = singleListing;
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {
                const findListing = data.find(listing => listing?._id === listingId);
                setSingleListing(findListing);
            })
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='py-5 listingDetails'>
            <Container>
                <Row>
                    <div>
                        <Image className='' src={image} />
                        <h2 className='pt-5'>{title}</h2>
                    </div>
                    <Col xs={12} md={8}>
                        <Row className='mb-5 businessInfoContainer'>
                            <Col xs={12} md={4}>
                                <div className='businessInfo'>
                                    <p>Total Capital</p>
                                    <h2>${totalCash}</h2>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>

                                <div className='businessInfo middleInfo'>
                                    <p>Minimum Cash Required</p>
                                    <h2>${minCash}</h2>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className='businessInfo'>
                                    <p>Total Investment</p>
                                    <h2>{investment}</h2>
                                </div>
                            </Col>
                        </Row>
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
                            <h2 className='pb-3'>INSTA APPLY</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control mb-2' {...register("name", { required: true })} type="text" placeholder='Enter your name' />
                                <input className='form-control mb-2' {...register("email")} type="email" placeholder='Enter your email' />
                                <input className='form-control mb-2' type="number" {...register("phone")} placeholder='Enter your phone' />
                                <input className='form-control mb-2' type="text" {...register("country")} placeholder='Country Name' />
                                <input className='form-control mb-2' type="text" {...register("city")} placeholder='City Name' />
                                <textarea className='form-control mb-2' {...register("message")} name="message" id="" cols="30" rows="5" placeholder='Address'></textarea>
                                <select className='w-100 py-2' {...register("investment")} >
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
                                    <input type="checkbox" {...register("agree")} required />
                                    <label className='ms-2' for="vehicle3"> I agree to the Terms & Conditions</label>
                                </div>
                                <div className="pt-3">
                                    <input className='btn btn-primary px-5 py-2' type="submit" value="Sent" />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListingDetails;
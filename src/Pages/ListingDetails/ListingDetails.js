import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

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
        <div className='py-5'>
            <Container>
                <Row>
                    <div>
                        <Image className='' src={image} />
                    </div>
                    <Col xs={12} md={7}>

                        <div className='px-2'>
                            <div className='py-5'>
                                <h5>Total Capital: <span>${totalCash}</span></h5>
                                <h5>Minimum Cash Required: <span>${minCash}</span></h5>
                                <h5>Total Investment: <span>{investment}</span></h5>
                            </div>
                            <div>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                            <div>
                                <p>Info-1</p>
                                <p>Info-2</p>
                                <p>Info-3</p>
                                <p>Info-4</p>
                                <p>Info-5</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <div className='shadow py-5 px-3 rounded'>
                            <h4 className='pb-3 text-center'>Contact With Business Owner</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-3'>
                                    <label className='mb-2' htmlFor="">Name:</label>
                                    <input className='form-control mb-2' {...register("name", { required: true })} type="text" placeholder='Enter your name' />
                                </div>
                                <div className="mb-3">
                                    <label className='mb-2' htmlFor="">Email</label>
                                    <input className='form-control mb-2' {...register("email")} type="email" placeholder='Enter your email' />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className="mb-1">Phone</label>
                                    <input className='form-control mb-2' type="number" {...register("phone")} placeholder='Enter your phone' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="mb-1">Message:</label>
                                    <textarea className='form-control mb-2' {...register("message")} name="message" id="" cols="30" rows="5" placeholder='Text'></textarea>
                                </div>
                                <input className='btn btn-primary px-5 py-2' type="submit" value="Sent" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListingDetails;
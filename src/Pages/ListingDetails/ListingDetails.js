import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ListingDetails = () => {

    const { listingId } = useParams();
    const [singleListing, setSingleListing] = useState({});
    const { image, title } = singleListing;
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
                    <Col xs={12} md={8}>
                        <div>
                            <Image className='w-100' src={image} />
                            <h2>{title}</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='shadow py-3 px-2 rounded'>
                            <h4 className='py-3'>Contact With Business Owner</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control mb-2' {...register("name", { required: true })} type="text" placeholder='Name' />
                                <input className='form-control mb-2' {...register("email")} type="email" placeholder='Email' />
                                <input className='form-control mb-2' type="number" {...register("phone")} placeholder='Phone' />
                                <textarea className='form-control mb-2' {...register("message")} name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
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
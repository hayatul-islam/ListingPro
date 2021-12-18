import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddListing = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4040/addListing', data)
            .then((result) => {
                console.log(result);
            })
    };

    const [addListing, setAddListing] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4040/addAllListing')
            .then(res => res.json())
            .then(data => setAddListing(data))
    }, []);

    const handleAddFeature = id => {
        const findListing = addListing.find(listing => listing?._id === id);
        axios.post(`http://localhost:4040/newAddListing/${id}`, findListing)
            .then(result => {
                console.log(result);
            })
    }

    const handleDelete = id => {
        axios.delete(`http://localhost:4040/deleteAddListing/${id}`)
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-100 mb-2 py-1' {...register("title", { required: true })} placeholder='Listing Title' />
                            <select className='w-100 mb-2 py-2' {...register("category")}>
                                <option value="selectCategory">Select Category</option>
                                <option value="automotive">Automotive</option>
                                <option value="beautySpa">Beauty & Spa</option>
                                <option value="hotels">Hotels</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="shopping">Shopping</option>
                            </select>
                            <input {...register("image", { required: true })} type="file" name="image" id="" />
                            <input className='w-100 mb-2 py-1' {...register("investment", { required: true })} placeholder='Investment' />
                            <input className='w-100 mb-2 py-1' {...register("location", { required: true })} placeholder='Location' />
                            <textarea {...register("description")} className='w-100' name="description" id="" cols="30" rows="5" placeholder='Description'></textarea>
                            <input type="submit" value="Add Listing" />
                        </form>
                    </Col>
                </Row>
                <Row>
                    {
                        addListing.map(listing => <Col xs={12} md={4}>
                            <div>
                                <Card className='my-2'>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{listing?.title}</Card.Title>
                                        <Card.Text>
                                            {listing?.description}
                                        </Card.Text>
                                        <Button onClick={() => handleAddFeature(listing?._id)} className='me-2' variant="outline-dark">Add Featured</Button>
                                        <Button onClick={() => handleDelete(listing?._id)} variant="dark">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>)
                    }
                </Row>


            </Container>
        </div>
    );
};

export default AddListing;
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddListing = () => {

    const { register, handleSubmit, reset } = useForm();
    const [addListing, setAddListing] = useState([]);
    const [brandCategory, setBrandCategory] = useState([]);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://boiling-taiga-51973.herokuapp.com/addListing', data)
            .then((result) => {
                if (result.data.insertedId) {
                    reset();
                }
            })
    };


    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/addAllListing')
            .then(res => res.json())
            .then(data => setAddListing(data))
    }, []);

    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setBrandCategory(data))
    }, []);

    const handleAddFeature = id => {
        const findListing = addListing.find(listing => listing?._id === id);
        axios.post(`https://boiling-taiga-51973.herokuapp.com/newAddListing/${id}`, findListing)
            .then(result => {
                console.log(result);
            })
    }

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            axios.delete(`https://boiling-taiga-51973.herokuapp.com/deleteAddListing/${id}`)
                .then(result => {
                    console.log(result);
                })
        }

    };

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={2}> </Col>
                    <Col xs={12} md={8}>
                        <div className='shadow px-4 py-5 rounded'>
                            <h2 className='pb-4 text-center'>Add New Listing</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label className='mb-2' htmlFor="">Listing Title</label> <br />
                                            <input type="text" className='w-100 mb-2 py-1' {...register("title", { required: true })} placeholder='Title' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label className='mb-2' htmlFor="">Category</label> <br />
                                            <select className='w-100 mb-2 py-2' {...register("category")}>
                                                <option value="selectCategory">Select Category</option>
                                                {
                                                    brandCategory.map(category => <option value={category?.title}>{category?.title}</option>)
                                                }
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Image url</label>
                                            <input className='w-100 mb-2 py-1' {...register("image", { required: true })} type="text" name="image" id="" placeholder='Url' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label className="mb-2" htmlFor="">Min Cash</label>
                                            <input className='w-100 mb-2 py-1' {...register("minCash", { required: true })} type="number" placeholder='Amount' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Total Capital</label>
                                            <input className='w-100 mb-2 py-1' {...register("totalCash", { required: true })} type="number" placeholder='Amount' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Investment</label>
                                            <select className='w-100 mb-2 py-2' {...register("investment")} name="investment" id="">
                                                <option value="default">Amount</option>
                                                <option value="$40000 - $90000">Under $40000 - $90000</option>
                                                <option value="$60000 - $12000">Under $60000 - $12000</option>
                                                <option value="$70000 - $140000">Under $70000 - $140000</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Location</label>
                                            <input className='w-100 mb-2 py-1' {...register("location", { required: true })} placeholder='Location' />
                                        </div>
                                    </Col>

                                </Row>
                                <div className='pb-2'>
                                    <label className='mb-2' htmlFor="">Description</label>
                                    <textarea {...register("description")} className='w-100' name="description" id="" cols="30" rows="5" placeholder='Text'></textarea>
                                </div>
                                <input className='py-2 px-3' type="submit" value="Add Listing" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddListing;
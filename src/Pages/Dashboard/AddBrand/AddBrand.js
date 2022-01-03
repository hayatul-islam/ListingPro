import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddBrand = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://aqueous-garden-52898.herokuapp.com/addBrand', data)
            .then((result) => {
                if (result.data.insertedId) {
                    reset();
                }
            })
    };

    return (
        <div>
            <Row>
                <Col xs={12} md={12}>
                    <div className='shadow px-4 py-5 rounded'>
                        <h2 className='pb-4 text-center'>Add New Brand</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Brand Name</label> <br />
                                        <input type="text" className='w-100 mb-2 py-1' {...register("title", { required: true })} placeholder='Enter your Brand name' />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Brand Image</label> <br />
                                        <input type="text" className='w-100 mb-2 py-1' {...register("image", { required: true })} placeholder='Enter brand image url' />
                                    </div>
                                </Col>
                            </Row>
                            <input className='py-2 px-3' type="submit" value="Add Brand" />
                        </form>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default AddBrand;
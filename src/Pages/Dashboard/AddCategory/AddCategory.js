import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddCategory = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://aqueous-garden-52898.herokuapp.com/addSubCategory', data)
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
                        <h2 className='pb-4 text-center'>Add New Category</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>
                                        <label className='mb-2' htmlFor="">Category Name</label> <br />
                                        <input type="text" className='w-100 mb-2 py-1' {...register("name", { required: true })} placeholder='Enter your Category' />
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className='pb-2'>

                                    </div>
                                </Col>
                            </Row>
                            <input className='py-2 px-3' type="submit" value="Add Category" />
                        </form>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default AddCategory;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from "axios";

const AddCategory = () => {

    const {
        register,
        handleSubmit,
        formState: { },
    } = useForm();


    const onSubmit = (data, e) => {
        console.log(data);
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("image", data.image[0]);

        axios.post("https://calm-dawn-39497.herokuapp.com/addCategory", formData)
            // axios.post("http://localhost:4040/addListing", formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully')
                    e.target.reset();
                }
            })
    }

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
                                        <label className='mb-2' htmlFor="">Category Image</label> <br />
                                        <input {...register("image", { required: true })} type="file" className='w-100 mb-2 py-1' placeholder='Enter Category image' />
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
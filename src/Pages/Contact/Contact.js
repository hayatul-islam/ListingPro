import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=''>
            <Container>
                <Row>
                    <Col xs={12} md={2}></Col>
                    <Col xs={12} md={8}>
                        <div className="contact-form shadow px-4 py-5 my-5 rounded">
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

export default Contact;
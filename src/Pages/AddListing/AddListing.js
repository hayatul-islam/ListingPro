import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useListing from '../../Hooks/useListing';

const AddListing = () => {

    const { register, handleSubmit, reset } = useForm();
    const { category } = useListing();
    const [saveImage, setSaveImage] = useState();

    const onSubmit = (data => {
        data.image = saveImage;
        fetch('https://boiling-taiga-51973.herokuapp.com/addListing', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                if (result.insertedId) {
                    reset()
                }
            })

    });

    const imageUploader = async (e) => {
        const base64 = await convertBase64(e.target.files[0]);
        setSaveImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
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
                                                    category.map(category => <option value={category?.name}>{category?.name}</option>)
                                                }
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Listing Image</label>
                                            <input onChange={imageUploader} type="file" className='w-100 mb-2 py-1' placeholder='Enter Listing image' />
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
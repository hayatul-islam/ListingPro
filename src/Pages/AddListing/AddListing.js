import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useListing from '../../Hooks/useListing';
import axios from "axios";

const AddListing = () => {

    // const { register, handleSubmit, reset } = useForm();
    const { category } = useListing();


    // const [saveImage, setSaveImage] = useState();
    // const [bannerImage, setBannerImage] = useState([]);

    // const onSubmit = (data => {
    //     data.image = saveImage;
    //     data.bannerImg = bannerImage;
    //     console.log(data);
    //     fetch('https://aqueous-garden-52898.herokuapp.com/addListing', {
    //         fetch('http://localhost:4040/addListing', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then((result) => {
    //             if (result.insertedId) {
    //                 reset()
    //             }
    //         })

    // });



    // const imageUploader = async (e) => {
    //     const base64 = await convertBase64(e.target.files[0]);
    //     setSaveImage(base64);
    // };
    // const bannerImageUploader = async (e) => {
    //     const base64 = await convertBase64(e.target.files[0]);
    //     setBannerImage([...bannerImage, base64]);
    // };

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };

    const {
        register,
        handleSubmit,
        formState: { },
    } = useForm();


    const onSubmit = (data, e) => {
        console.log(data);
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("investment", data.investment);
        formData.append("minCash", data.minCash);
        formData.append("totalCash", data.totalCash);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);
        formData.append("banner1", data.banner1[0]);
        formData.append("banner2", data.banner2[0]);
        formData.append("banner3", data.banner3[0]);
        formData.append("category", data.category);
        formData.append("location", data.location);

        axios.post("https://aqueous-garden-52898.herokuapp.com/addListing", formData)
        axios.post("http://localhost:4040/addListing", formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully')
                    e.target.reset();
                }
            })
    }




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
                                            <input {...register("image", { required: true })} type="file" className='w-100 mb-2 py-1' placeholder='Enter Listing image' />
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
                                                <option value="$10000 - $50000">$10000 - $50000</option>
                                                <option value="$50000 - $100000">$50000 - $100000</option>
                                                <option value="$100000 - $150000">$100000 - $150000</option>
                                                <option value="$150000 - $200000">$150000 - $200000</option>
                                                <option value="$200000 - $250000">$200000 - $250000</option>
                                                <option value="$250000 - $300000">$250000 - $300000</option>
                                                <option value="$300000 - $350000">$300000 - $350000</option>
                                                <option value="$350000 - $400000">$350000 - $400000</option>
                                                <option value="$400000 - $450000">$400000 - $450000</option>
                                                <option value="$450000 - $500000">$450000 - $500000</option>
                                                <option value="$500000 - $1000000">$500000 - $1000000</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Location</label>
                                            <input className='w-100 mb-2 py-1' {...register("location", { required: true })} placeholder='Location' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Banner Image</label>
                                            <input {...register("banner1", { required: true })} type="file" className='w-100 mb-2 py-1' placeholder='Enter Banner image' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Banner Image</label>
                                            <input {...register("banner2", { required: true })} type="file" className='w-100 mb-2 py-1' placeholder='Enter Banner image' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Banner Image</label>
                                            <input {...register("banner3", { required: true })} type="file" className='w-100 mb-2 py-1' placeholder='Enter Banner image' />
                                        </div>
                                    </Col>
                                </Row>
                                <div className='pb-2'>
                                    <label className='mb-2' htmlFor="">About</label>
                                    <textarea {...register("description")} className='w-100' name="description" id="" cols="30" rows="5" placeholder='About'></textarea>
                                    <label className='mb-2 pt-2' htmlFor="">Curriculum</label>
                                    <textarea {...register("curriculum")} className='w-100' name="curriculum" id="" cols="30" rows="5" placeholder='Curriculum'></textarea>
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
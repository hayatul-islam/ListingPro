import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useListing from '../../Hooks/useListing';
import axios from "axios";

const AddListing = () => {

    const { category, apiLink } = useListing();

    const {
        register,
        handleSubmit,
        formState: { },
    } = useForm();

    const title = useRef()
    const investment = useRef()
    const totalCash = useRef()
    const minCash = useRef()
    const description = useRef()
    const location = useRef()
    const curriculum = useRef()
    const listingCategory = useRef()

    const [categoryImg, setCategoryImg] = useState(null);
    const [bannerImg1, setBannerImg1] = useState(null);
    const [bannerImg2, setBannerImg2] = useState(null);
    const [bannerImg3, setBannerImg3] = useState(null);


    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            investment: investment.current.value,
            title: title.current.value,
            totalCash: totalCash.current.value,
            minCash: minCash.current.value,
            description: description.current.value,
            location: location.current.value,
            category: listingCategory.current.value,
            curriculum: curriculum.current.value,
        };
        if (categoryImg) {

            const data = new FormData();
            const fileName = Date.now() + categoryImg.name;
            data.append("name", fileName);
            data.append("file", categoryImg);
            newPost.image = fileName;

            try {
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        if (bannerImg1) {
            const data = new FormData();
            const banner1 = Date.now() + bannerImg1.name;
            data.append("name", banner1);
            data.append("file", bannerImg1);
            newPost.bannerImg1 = banner1;
            try {
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        if (bannerImg2) {
            const data = new FormData();
            const banner2 = Date.now() + bannerImg2.name;
            data.append("name", banner2);
            data.append("file", bannerImg2);
            newPost.bannerImg2 = banner2;
            try {
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        if (bannerImg3) {
            const data = new FormData();
            const banner3 = Date.now() + bannerImg3.name;
            data.append("name", banner3);
            data.append("file", bannerImg3);
            newPost.bannerImg3 = banner3;
            try {
                await axios.post(`${apiLink}/api/upload`, data);
            } catch (err) { }
        }
        try {
            await axios.post(`${apiLink}/listing`, newPost);
            window.location.reload();
        } catch (err) { }
    };



    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className='shadow px-4 py-5 rounded'>
                            <h2 className='pb-4 text-center'>Add New Listing</h2>
                            <form onSubmit={submitHandler}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label className='mb-2' htmlFor="">Listing Title</label> <br />
                                            <input
                                                ref={title}
                                                type="text"
                                                className='w-100 mb-2 py-1'
                                                placeholder='Title' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label className='mb-2' htmlFor="">Category</label> <br />
                                            <select
                                                ref={listingCategory}
                                                className='w-100 mb-2 py-2'
                                            >
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
                                            <input
                                                onChange={(e) => setCategoryImg(e.target.files[0])}
                                                type="file"
                                                className='w-100 mb-2 py-1'
                                                placeholder='Enter Listing image' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label className="mb-2" htmlFor="">Min Cash</label>
                                            <input
                                                ref={minCash}
                                                className='w-100 mb-2 py-1'
                                                type="number"
                                                placeholder='Amount' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Total Capital</label>
                                            <input
                                                ref={totalCash}
                                                className='w-100 mb-2 py-1'
                                                type="number" placeholder='Amount' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Investment</label>
                                            <select
                                                ref={investment}
                                                className='w-100 mb-2 py-2'
                                                name="investment" id="">
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
                                            <input
                                                ref={location}
                                                className='w-100 mb-2 py-1'
                                                placeholder='Location' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Banner Image</label>
                                            <input
                                                onChange={(e) => setBannerImg1(e.target.files[0])}
                                                type="file"
                                                className='w-100 mb-2 py-1'
                                                placeholder='Enter Banner image' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Banner Image</label>
                                            <input
                                                onChange={(e) => setBannerImg2(e.target.files[0])}
                                                type="file"
                                                className='w-100 mb-2 py-1'
                                                placeholder='Enter Banner image' />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className='pb-2'>
                                            <label htmlFor="" className="mb-2">Banner Image</label>
                                            <input
                                                onChange={(e) => setBannerImg3(e.target.files[0])}
                                                type="file"
                                                className='w-100 mb-2 py-1'
                                                placeholder='Enter Banner image' />
                                        </div>
                                    </Col>
                                </Row>
                                <div className='pb-2'>
                                    <label className='mb-2' htmlFor="">About</label>
                                    <textarea
                                        ref={description}
                                        className='w-100'
                                        name="description"
                                        id="" cols="30" rows="5"
                                        placeholder='About'></textarea>
                                    <label className='mb-2 pt-2' htmlFor="">Curriculum</label>
                                    <textarea
                                        ref={curriculum}
                                        className='w-100'
                                        name="curriculum"
                                        id="" cols="30" rows="5"
                                        placeholder='Curriculum'></textarea>
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
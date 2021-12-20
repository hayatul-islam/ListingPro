import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '../../Sharded/Header/Header';
import Brand from '../Brand/Brand';
import './Banner.css';

const Banner = () => {
    const [brands, setBrands] = useState([]);
    const [searchData, setSearchData] = useState({});

    console.log(searchData.category);
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/brands')
            // fetch('brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const search = data?.category;
        navigate(`/brandDetail/${search}`)
    };

    const handleSearch = (searchData) => {
        // navigate(`/listingDetails/${searchData}`)
    }

    return (
        <div>
            <div className="pb-5 pt-3 top-banner">
                <Container>
                    <div className="pb-5">
                        <Header />
                    </div>

                    <Row>
                        <Col xs={12} md={6}>
                            <div className='text-white pb-3'>
                                <h2>Find your Listing</h2>
                            </div>
                            <div className='d-flex'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select className='w-100 p-2 mb-2' {...register("category")} name="category" id="">
                                        <option value="default">Select Category</option>
                                        {
                                            brands.map(brand => <option value={brand?.title} >
                                                {brand?.title}
                                            </option>)
                                        }
                                    </select>
                                    <select className='w-100 p-2 mb-2' {...register("investment")} name="investment" id="">
                                        <option value="default">Investment</option>
                                        <option value="1000">Under $1000</option>
                                        <option value="2000">Under $2000</option>
                                        <option value="3000">Under $3000</option>
                                    </select>
                                    <input className='py-2 w-75' {...register("inputSearch")} type="search" name="inputSearch" id="" placeholder='Search for...' />
                                    <input onClick={() => handleSearch(searchData?.category)} className='w-25 py-2' type="submit" value="Search" />

                                </form>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img className='w-100 rounded' src="https://baloo.rs/wp-content/uploads/2020/10/internet-marketing-2.jpg" alt="" />
                        </Col>

                    </Row>


                </Container>
            </div>
            <div>
                <div className="brands-container text-center mt-5">
                    {
                        brands.map(brand => <Brand
                            key={brand?._id}
                            brand={brand}
                        ></Brand>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Banner;
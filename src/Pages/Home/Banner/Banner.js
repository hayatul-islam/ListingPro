import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Brand from '../Brand/Brand';
import './Banner.css';

const Banner = () => {
    const [brands, setBrands] = useState([]);
    const [searchData, setSearchData] = useState({});


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
            <div className=" pt-3 top-banner">
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col xs={12} md={6}>
                            <div className='find-listing'>
                                <div className='text-white pb-3'>
                                    <h2>Find your Listing</h2>
                                </div>
                                <div className=''>
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
                                        <div className='search-container'>
                                            <input className='p-2 w-100 inputSearch' {...register("inputSearch")} type="search" name="inputSearch" id="" placeholder='Search for...' />
                                            <button onClick={() => handleSearch(searchData?.category)} type='submit' className="submitBtn"><i class="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>

                            {/* <img className='w-100 rounded' src="https://i.ibb.co/L1Q3FBn/two-business-partners-handshaking-74855-6685-removebg-preview.png" alt="" /> */}
                            {/* <img className='w-100 rounded' src="https://i.ibb.co/Y2zHb1c/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training.png" alt="" /> */}
                            {/* <img className='w-100 rounded' src="https://lh3.googleusercontent.com/proxy/30uvBnwUVsa8RwaCwccou5ieLx47JCGBbS_-pHsZ_PMlbi1nfhg_VOm04uhR25J3xYBX_AjbZlNeG-Acu4Nxvd3UCsrgjI4gwMuBfFegjwzCmnF8O85SVQpLz2iH" alt="" /> */}
                            {/* <img className='w-100 rounded' src="https://www.pngall.com/wp-content/uploads/2016/06/Business-PNG-Clipart.png" alt="" /> */}
                            <div>
                                <img className='w-100 rounded' src="https://www.pngall.com/wp-content/uploads/2016/06/Business-Free-Download-PNG.png" alt="" />
                            </div>
                        </Col>

                    </Row>


                </Container>
            </div>


            <div className='brands-section text-center py-4'>
                <h3 className='text-light pb-3'>Popular Brands For Sale</h3>
                <div className="brands-container">
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
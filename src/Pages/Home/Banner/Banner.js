import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import './Banner.css';
import PulseLoader from "react-spinners/PulseLoader";

const Banner = () => {
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        // fetch('https://calm-dawn-39497.herokuapp.com/category')
        fetch('http://localhost:4040/category')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    console.log(category)

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        let sub = data?.category;
        let investment = data?.investment;
        let searchValue = data?.inputSearch;
        console.log(typeof searchValue);
        if (searchValue === '') {
            navigate(`/findSearchListing/${sub}/${investment}`)
        } else {
            navigate(`/searchDetails/${sub}/${investment}/${searchValue}`);
        }
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
                                            <option value="all">Select Category</option>
                                            {
                                                category.map(category => <option key={category?._id} value={category?.name} >
                                                    {category?.name}
                                                </option>)
                                            }
                                        </select>
                                        <select className='w-100 p-2 mb-2' {...register("investment")} name="investment" id="">
                                            <option value="all">Investment</option>
                                            <option value="10000">Under $10,000</option>
                                            <option value="20000">Under $20,000</option>
                                            <option value="30000">Under $30,000</option>
                                            <option value="40000">Under $40,000</option>
                                            <option value="50000">Under $50,000</option>
                                            <option value="60000">Under $60,000</option>
                                            <option value="70000">Under $70,000</option>
                                            <option value="80000">Under $80,000</option>
                                            <option value="90000">Under $90,000</option>
                                            <option value="100000">Under $100,000</option>
                                            <option value="150000">Under $150,000</option>
                                            <option value="200000">Under $200,000</option>
                                            <option value="300000">Under $300,000</option>
                                            <option value="400000">Under $400,000</option>
                                            <option value="450000">Under $450,000</option>
                                            <option value="500000">Over $500,000</option>
                                        </select>
                                        <div className='search-container'>
                                            <input className='p-2 w-100 inputSearch' {...register("inputSearch")} type="search" name="inputSearch" id="" placeholder='Search for...' defaultValue={null} />
                                            <button type='submit' className="submitBtn"><i class="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div>
                                <img className='w-100 rounded' src="https://www.pngall.com/wp-content/uploads/2016/06/Business-Free-Download-PNG.png" alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>


            <div className='brands-section text-center py-4'>
                <h3 className='text-light pb-3'>Popular Category</h3>
                {
                    isLoading ? <div className="sweet-loading">
                        <PulseLoader
                            size={10} color={'white'} />
                    </div>
                        :

                        <div className="brands-container">
                            {
                                category.map(category => <Category
                                    key={category?._id}
                                    category={category}
                                ></Category>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default Banner;
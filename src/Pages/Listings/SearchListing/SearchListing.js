import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import Header from '../../Sharded/Header/Header';

const SearchListing = () => {

    const { subCategory } = useListing();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        let sub = data?.sub_category;
        let investment = data?.investment;
        console.log(sub, investment);
        navigate(`/findSearchListing/${sub}/${investment}`)
    }


    return (
        <div className='py-4 bg-black text-light my-3 rounded'>
            <Container>
                <div>
                    <Header />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col xs={12} md={1}></Col>
                        <Col xs={12} md={10}>
                            <Row>
                                <Col xs={12} md={4}>
                                    <select className='w-100 py-2 mx-2' {...register("sub_category")}>
                                        <option value="all">All Industries</option>
                                        {
                                            subCategory?.map(subCategory => <option value={subCategory}>{subCategory}</option>)
                                        }
                                    </select>
                                </Col>
                                <Col xs={12} md={4}>
                                    <select className='w-100 py-2 mx-2' {...register("investment")}>
                                        <option value="all">All Investment Amounts</option>
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
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="mx-2">
                                        <input className='w-100 py-2' type="submit" value='Search for...' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>



                </form>
            </Container>
        </div>
    );
};

export default SearchListing;
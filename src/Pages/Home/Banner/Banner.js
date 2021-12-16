import React, { useEffect, useState } from 'react';
import { Col, Container, Row, InputGroup, FormControl, Image } from 'react-bootstrap';
import Header from '../../Sharded/Header/Header';
import Brand from '../Brand/Brand';
import './Banner.css';

const Banner = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="pb-5 pt-3 top-banner">
            <Container>
                <div className="pb-5">
                    <Header />
                </div>
                <div className="text-center pb-5 text-white">
                    <h1>Explore Your City</h1>
                    <p>Let's uncover the best places to eat, drink, and shop nearest to you.</p>
                </div>
                <Row>
                    <Col md={2}></Col>
                    <Col xs={12} md={8}>

                        <div className="d-flex">
                            <InputGroup className="mb-3 me-3">
                                <InputGroup.Text className="border-0 bg-white" id="basic-addon1">What</InputGroup.Text>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text className="bg-white border-0 py-2" id="basic-addon1">Where</InputGroup.Text>
                                <FormControl className="border-0"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text className="bg-primary text-white" id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
                            </InputGroup>
                        </div>
                    </Col>
                    <div className="py-5 text-white suggest">
                        <p className="">Just looking around? Let us suggest you something hot & happening!</p>
                        <Image src="https://classic.listingprowp.com/wp-content/themes/listingpro/assets/images/banner-arrow.png" />
                    </div>
                </Row>
                <div className="brands-container text-center">
                    {
                        brands.map(brand => <Brand
                            key={brand?._id}
                            brand={brand}
                        ></Brand>)
                    }

                </div>

            </Container>
        </div>
    );
};

export default Banner;
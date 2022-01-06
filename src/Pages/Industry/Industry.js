import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useListing from '../../Hooks/useListing';
import SearchListing from '../Listings/SearchListing/SearchListing';

const Industry = () => {

    const { category } = useListing();
    const navigate = useNavigate();

    const handleIndustry = industry => {
        navigate(`/industryDetails/${industry}`)
    }

    return (
        <div className='py-5'>
            <Container>
                <div className=''>
                    <SearchListing />
                </div>
                <Row>
                    <h2>INDUSTRY</h2>
                    {
                        category?.map(industry => <Col xs={12} md={6} lg={4}>
                            <div className='py-2'>
                                <li onClick={() => handleIndustry(industry?.name)}>{industry?.name}</li>
                            </div>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Industry;
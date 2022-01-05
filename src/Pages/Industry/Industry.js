import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useListing from '../../Hooks/useListing';
import SearchListing from '../Listings/SearchListing/SearchListing';

const Industry = () => {

    const { subCategory } = useListing();

    return (
        <div className='py-5'>
            <Container>
                <div className=''>
                    <SearchListing />
                </div>
                <Row>
                    <h2>INDUSTRY</h2>
                    {
                        subCategory?.map(industry => <Col xs={12} md={6} lg={4}>
                            <div className='py-2'>
                                <li>{industry?.name}</li>
                            </div>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Industry;
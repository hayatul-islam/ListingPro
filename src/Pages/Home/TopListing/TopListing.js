
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import Listing from '../Listing/Listing';

const TopListing = () => {

    const { listing } = useListing();
    const navigate = useNavigate();

    const handleAllListing = () => {
        navigate('/allListing')
    }

    return (
        <div className="py-5">
            <Container>
                <div className="text-center py-5">
                    <h2>Top Listing</h2>
                    <p>Popular Exclusive Listings In Our Directory</p>
                </div>
                <Row>
                    {
                        listing.slice(0, 4).map(listing => <Col
                            key={listing?._id}
                            xs={12} lg={3} sm={6}>
                            <Listing listing={listing} />
                        </Col>)
                    }
                    <div className="text-center mt-4">
                        <Button onClick={handleAllListing} className="px-5 py-3 rounded-pill" variant="secondary">View All Listing</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default TopListing;
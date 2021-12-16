
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const TopListing = () => {
    const [topListing, setTopListing] = useState([]);
    useEffect(() => {
        fetch('listing.json')
            .then(res => res.json())
            .then(data => setTopListing(data))
    }, []);
    return (
        <div className="py-5">
            <Container>
                <div className="text-center py-5">
                    <h2>Top Listing</h2>
                    <p>Popular Exclusive Listings In Our Directory</p>
                </div>
                <Row>
                    {
                        topListing.map(listing => <Col xs={12} md={4}>
                            <Card>
                                <Card.Img variant="top" src={listing?.image} />
                                <Card.Body>
                                    <Card.Title>{listing?.title}</Card.Title>
                                    <Card.Text>
                                        <span>{listing?.location}</span> | <span>{listing?.investment}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                    <div className="text-center mt-4">
                        <Button className="px-5 py-3 rounded-pill" variant="secondary">All Listing</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default TopListing;
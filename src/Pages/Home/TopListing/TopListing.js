
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TopListing = () => {
    const [topListing, setTopListing] = useState([]);
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            // fetch('listing.json')
            .then(res => res.json())
            .then(data => setTopListing(data))
    }, []);

    const navigate = useNavigate();
    const handleListingDetails = id => {
        navigate(`/listingDetails/${id}`)
        console.log(id);
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
                        topListing.map(listing => <Col
                            key={listing?._id}
                            xs={12} md={3}>
                            <Card onClick={() => handleListingDetails(listing?._id)}>
                                <Card.Img className='img-fluid' variant="top" src={listing?.image} />
                                <Card.Body>
                                    <Card.Title>{listing?.title}</Card.Title>
                                    <Card.Text>
                                        <p>{listing?.description.slice(0, 120)} more...</p>
                                        <h6>Cash Required <span className='fs-5'>${listing?.minCash}</span></h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                    <div className="text-center mt-4">
                        <Button className="px-5 py-3 rounded-pill" variant="secondary">View All Listing</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default TopListing;
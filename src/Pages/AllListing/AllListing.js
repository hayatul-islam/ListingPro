import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllListing = () => {

    const [listing, setListing] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            // fetch('listing.json')
            .then(res => res.json())
            .then(data => setListing(data))
    }, []);

    const handleListingDetails = id => {
        navigate(`/listingDetails/${id}`)
        console.log(id);
    }

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <div className='pb-5 text-center'>
                        <h1>All Listing</h1>
                    </div>
                    {
                        listing.map(listing => <Col
                            key={listing?._id}
                            xs={12} md={3}>
                            <Card className='my-2' onClick={() => handleListingDetails(listing?._id)}>
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

                </Row>
            </Container>
        </div>
    );
};

export default AllListing;
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ListingDetails = () => {

    const { listingId } = useParams();
    const [singleListing, setSingleListing] = useState({});
    const { image, title } = singleListing;
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {
                const findListing = data.find(listing => listing?._id === listingId);
                setSingleListing(findListing);
            })
    }, []);

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div>
                            <Image className='w-100' src={image} />
                            <h2>{title}</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListingDetails;
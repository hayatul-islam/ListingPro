import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useListing from '../../Hooks/useListing';
import Listing from '../Home/Listing/Listing';
import SearchListing from '../Listings/SearchListing/SearchListing';

const BrandDetail = () => {

    const { brandTitle } = useParams();
    const { listing } = useListing();
    const [brandDetails, setBrandDetails] = useState([]);



    useEffect(() => {
        fetch('https://aqueous-garden-52898.herokuapp.com/listing')
            // fetch('listing.json')
            .then(res => res.json())
            .then(data => {

            })
    }, []);

    return (
        <div className='px-3 py-5'>
            <Container>
                <div>
                    <SearchListing />
                </div>
                <Row>
                    {
                        brandDetails.map(listing => <Col
                            key={listing?._id}
                            xs={12} md={3}>
                            <Listing listing={listing} />
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BrandDetail;
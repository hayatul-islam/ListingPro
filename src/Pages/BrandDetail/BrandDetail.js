import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Listing from '../Home/Listing/Listing';
import SearchListing from '../Listings/SearchListing/SearchListing';

const BrandDetail = () => {

    const { brandTitle, investment } = useParams();
    const [brandDetails, setBrandDetails] = useState([]);


    console.log(typeof brandTitle);

    useEffect(() => {
        fetch('https://aqueous-garden-52898.herokuapp.com/listing')
            // fetch('listing.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data?.filter(cat => cat?.category === brandTitle && (cat?.totalCash <= investment));
                setBrandDetails(filterData);
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
                        brandDetails?.map(listing => <Col
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
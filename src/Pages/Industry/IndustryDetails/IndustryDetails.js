import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import Listing from '../../Home/Listing/Listing';
import SearchListing from '../../Listings/SearchListing/SearchListing';

const IndustryDetails = () => {

    const { industryName } = useParams();
    const { listing } = useListing();

    const filterListng = listing?.filter(list => list?.sub_category === industryName);



    return (
        <div className='py-5'>
            <Container>
                <SearchListing />
                <Row>
                    {
                        filterListng?.map(listing => <Col
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

export default IndustryDetails;
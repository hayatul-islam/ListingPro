import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Listing from '../Home/Listing/Listing';
import SearchListing from '../Listings/SearchListing/SearchListing';

const ByInvestmentDetails = () => {
    const { level } = useParams();
    const [investmentLevel, setInvestmentLevel] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-garden-52898.herokuapp.com/listing')
            // fetch('listing.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data?.filter(cat => parseFloat(cat?.totalCash) <= parseFloat(level));
                console.log((filterData));
                setInvestmentLevel(filterData);
            })
    }, [investmentLevel]);

    return (
        <div className='px-3 py-5'>
            <Container>
                <div>
                    <SearchListing />
                </div>
                <Row>
                    {
                        investmentLevel?.map(listing => <Col
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


export default ByInvestmentDetails;
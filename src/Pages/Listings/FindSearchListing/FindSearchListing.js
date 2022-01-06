import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Listing from '../../Home/Listing/Listing';
import SearchListing from '../SearchListing/SearchListing';

const FindSearchListing = () => {

    const { category, investment } = useParams();
    const [listing, setListing] = useState([]);


    const justCategory = listing?.filter(list => list?.category === category);
    const categoryAndInvestment = listing?.filter(list => list?.category === category && parseFloat(list?.totalCash) <= parseFloat(investment));

    const onlyInvestment = listing?.filter(list => parseFloat(list?.totalCash) <= parseFloat(investment))



    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {
                setListing(data)
            }).catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='py-5'>
            <SearchListing />
            <Container>
                <Row>
                    {
                        category && investment === 'all' ?
                            justCategory?.map(listing => <Col
                                key={listing?._id}
                                xs={12} md={3}>
                                <Listing listing={listing} />
                            </Col>) : ''
                    }
                    {
                        category && investment !== 'all' ?
                            categoryAndInvestment?.map(listing => <Col
                                key={listing?._id}
                                xs={12} md={3}>
                                <Listing listing={listing} />
                            </Col>) : ''
                    }
                    {
                        category === 'all' && investment ?
                            onlyInvestment?.map(listing => <Col
                                key={listing?._id}
                                xs={12} md={3}>
                                <Listing listing={listing} />
                            </Col>) : ''
                    }
                    {
                        category === 'all' && investment === 'all' ?
                            listing?.map(listing => <Col
                                key={listing?._id}
                                xs={12} md={3}>
                                <Listing listing={listing} />
                            </Col>) : ''
                    }

                </Row>
            </Container>
        </div>
    );
};

export default FindSearchListing;
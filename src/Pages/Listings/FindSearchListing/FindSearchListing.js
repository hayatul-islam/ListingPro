import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import Listing from '../../Home/Listing/Listing';
import SearchListing from '../SearchListing/SearchListing';

const FindSearchListing = () => {

    const { listing } = useListing();
    const { subCategory, investment } = useParams();
    const [search, setSearch] = useState([]);

    const invest = parseInt(investment)

    // listing?.sub_category === subCategory
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {

                const searchData = data.filter(search => search?.sub_category === subCategory)
                setSearch(searchData)
            })
    }, [search]);

    console.log(search);

    return (
        <div className='pb-5'>
            <SearchListing />
            <Container>
                <Row>
                    {
                        search?.map(listing => <Col
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

export default FindSearchListing;
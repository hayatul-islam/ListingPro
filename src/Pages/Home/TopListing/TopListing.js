
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Listing from '../Listing/Listing';
import PulseLoader from "react-spinners/PulseLoader";

const TopListing = () => {

    const [listing, setListing] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setIsLoading(true)
        fetch('https://calm-dawn-39497.herokuapp.com/listing')
            // fetch('http://localhost:4040/listing')
            .then(res => res.json())
            .then(data => setListing(data))
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                // setIsLoading(false)
            })
    }, []);

    const handleAllListing = () => {
        navigate('/allListing')
    }

    return (
        <div className="py-5">
            <Container>
                <div className="text-center py-5">
                    <h2>Top Listing</h2>
                    <p>Popular Exclusive Listings In Our Directory</p>
                </div>
                {
                    isLoading ? <div className="sweet-loading text-center">
                        <PulseLoader
                            size={10} color={'black'} />
                    </div> :
                        <Row>
                            {
                                listing.slice(0, 4).map(listing => <Col
                                    key={listing?._id}
                                    xs={12} lg={3} sm={6}>
                                    <Listing listing={listing} />
                                </Col>)
                            }
                            < div className="text-center mt-4">
                                <Button onClick={handleAllListing} className="px-5 py-3 rounded-pill" variant="secondary">View All Listing</Button>
                            </div>
                        </Row>
                }
            </Container>
        </div >
    );
};

export default TopListing;
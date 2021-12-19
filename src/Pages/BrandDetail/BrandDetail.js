import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BrandDetail = () => {

    const { brandTitle } = useParams();
    const [brandDetails, setBrandDetails] = useState([]);
    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(listing => listing?.category === brandTitle.toLocaleLowerCase());
                setBrandDetails(filterData);
            })
    }, []);

    return (
        <div className='px-3 py-5'>
            <h3>brand details</h3>
            <Row>
                <Col xs={12} md={3}>
                    <h3>Listing</h3>
                </Col>
                <Col xs={12} md={9}>
                    <Row>
                        {
                            brandDetails.map(brand => <Col xs={12} md={6}>
                                <Card>
                                    <Card.Img variant="top" src={brand?.image} />
                                    <Card.Body>
                                        <Card.Title>{brand?.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            )
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default BrandDetail;
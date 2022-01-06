import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Listing = ({ listing }) => {

    const navigate = useNavigate();
    const handleListingDetails = id => {
        navigate(`/listingDetails/${id}`)
        console.log(id);
    }


    return (
        <Card className='my-2' onClick={() => handleListingDetails(listing?._id)}>
            <Card.Img className='img-fluid' variant="top" src={listing?.image} />
            <Card.Body>
                <Card.Title>{listing?.title}</Card.Title>
                <Card.Text>
                    <p>{listing?.description.slice(0, 120)} more...</p>
                    <h6>Cash Required <span className='fs-5'>${listing?.totalCash}</span></h6>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Listing;
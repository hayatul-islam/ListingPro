import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';

const Listing = ({ listing }) => {

    const { apiLink } = useListing();
    const navigate = useNavigate();
    const handleListingDetails = id => {
        navigate(`/listingDetails/${id}`)
        console.log(id);
    }


    return (
        <Card className='my-2' onClick={() => handleListingDetails(listing?._id)}>
            {
                listing?.image?.slice(0, 4) === 'http' ?

                    <Card.Img className='img-fluid' variant="top" src={listing?.image} />
                    :
                    <Card.Img className='img-fluid' variant="top" src={`${apiLink}/images/${listing?.image}`} />
            }

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
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './AllListing.css';

const AllListing = () => {

    const navigate = useNavigate();
    const [listing, setListing] = useState([]);


    const [pageNumber, setPageNumber] = useState(0);

    const perPage = 16;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(listing.length / perPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }





    useEffect(() => {
        fetch('https://calm-dawn-39497.herokuapp.com/listing')
            // fetch('listing.json')
            .then(res => res.json())
            .then(data => setListing(data))
            .catch(error => {
                console.log(error);
            })
    }, []);

    const handleListingDetails = id => {
        navigate(`/listingDetails/${id}`)
        console.log(id);
    }

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <div className='pb-5 text-center'>
                        <h1>All Listing</h1>
                    </div>
                    {
                        // listing.map(listing => <Col
                        listing.slice(pagesVisited, pagesVisited + perPage).map(listing => <Col
                            key={listing?._id}
                            xs={12} md={3}>
                            <Card className='my-2' onClick={() => handleListingDetails(listing?._id)}>
                                {
                                    listing?.image?.slice(0, 4) === 'http' ?
                                        <Card.Img className='img-fluid' variant="top" src={listing?.image} />
                                        :
                                        <Card.Img className='img-fluid' variant="top" src={`data:image/png;base64,${listing?.image}`} />
                                }
                                <Card.Body>
                                    <Card.Title>{listing?.title}</Card.Title>
                                    <Card.Text>
                                        <p>{listing?.description.slice(0, 120)} more...</p>
                                        <h6>Cash Required <span className='fs-5'>${listing?.minCash}</span></h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }

                </Row>
                <div className="pt-5 d-flex justify-content-center">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </Container>
        </div>
    );
};

export default AllListing;
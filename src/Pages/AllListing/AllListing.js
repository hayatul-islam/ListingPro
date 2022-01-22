import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import PulseLoader from "react-spinners/PulseLoader";
import './AllListing.css';
import SearchListing from '../Listings/SearchListing/SearchListing';
import useListing from '../../Hooks/useListing';

const AllListing = () => {

    const { apiLink } = useListing();
    const navigate = useNavigate();
    const [listing, setListing] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(`${apiLink}/listing`)
            .then(res => res.json())
            .then(data => setListing(data))
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    const perPage = 16;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(listing.length / perPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const handleListingDetails = id => {
        navigate(`/listingDetails/${id}`)
        console.log(id);
    }

    return (
        <div className='py-5'>
            {
                isLoading ? <div className="sweet-loading text-center">
                    <PulseLoader
                        size={10} color={'black'} />
                </div> :

                    <Container>
                        <SearchListing />
                        <Row>
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
                                                <Card.Img className='img-fluid' variant="top" src={`${apiLink}/images/${listing?.image}`} />
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
            }
        </div>
    );
};

export default AllListing;
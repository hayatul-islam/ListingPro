import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import useListing from '../../../Hooks/useListing';
import Listing from '../../Home/Listing/Listing';
import SearchListing from '../../Listings/SearchListing/SearchListing';

const IndustryDetails = () => {

    const { industryName } = useParams();
    const { listing } = useListing();

    const filterListing = listing?.filter(list => list?.category === industryName);

    const [pageNumber, setPageNumber] = useState(0);

    const perPage = 16;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(filterListing.length / perPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return (
        <div className='py-5'>
            <Container>
                <SearchListing />
                <Row>
                    {
                        filterListing.slice(pagesVisited, pagesVisited + perPage)?.map(listing => <Col
                            key={listing?._id}
                            xs={12} md={3}>
                            <Listing listing={listing} />
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

export default IndustryDetails;
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
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
                setInvestmentLevel(filterData);
            })
    }, [investmentLevel]);

    const [pageNumber, setPageNumber] = useState(0);

    const perPage = 16;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(investmentLevel.length / perPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className='px-3 py-5'>
            <Container>
                <div>
                    <SearchListing />
                </div>
                <Row>
                    {
                        investmentLevel.slice(pagesVisited, pagesVisited + perPage)?.map(listing => <Col
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


export default ByInvestmentDetails;
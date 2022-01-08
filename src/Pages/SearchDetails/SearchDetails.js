import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import Listing from '../Home/Listing/Listing';
import SearchListing from '../Listings/SearchListing/SearchListing';

const SearchDetails = () => {
    const { category, investment, searchValue } = useParams();
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {

                if (category !== 'all' && investment !== 'all' && searchValue) {
                    const filterAll = data?.filter(list => list?.category === category && parseFloat(list?.totalCash) <= parseFloat(investment) && list?.title.toLowerCase().indexOf(searchValue) !== -1);
                    // console.log(filterAll);
                    setSearch(filterAll)
                } else if (category !== 'all' && investment === 'all' && searchValue) {
                    const categoryAndSearch = data?.filter(list => list?.category === category && list?.title.toLowerCase().indexOf(searchValue) !== -1);
                    setSearch(categoryAndSearch)
                } else if (category === 'all' && investment !== 'all' && searchValue) {
                    const investmentAndSearch = data.filter(list => parseFloat(list?.totalCash) <= parseFloat(investment) && list?.title.toLowerCase().indexOf(searchValue) !== -1);
                    setSearch(investmentAndSearch)
                } else if (category === 'all' && investment === 'all' && searchValue) {
                    const onlySearch = data.filter(list => list?.title.toLowerCase().indexOf(searchValue) !== -1)
                    console.log(onlySearch);
                    setSearch(onlySearch)
                }

            }).catch(error => {
                console.log(error);
            });
    }, [search]);


    // pagination 
    const [pageNumber, setPageNumber] = useState(0);

    const perPage = 8;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(search.length / perPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className='py-5'>
            <SearchListing />
            <Container>
                <Row>
                    {
                        search?.slice(pagesVisited, pagesVisited + perPage).map(listing => <Col
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


export default SearchDetails;
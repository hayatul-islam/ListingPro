import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import Listing from '../../Home/Listing/Listing';
import SearchListing from '../SearchListing/SearchListing';
import PulseLoader from "react-spinners/PulseLoader";

const FindSearchListing = () => {

    const { category, investment } = useParams();
    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        // setIsLoading(true)
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {
                if (category === 'all' && investment === 'all') {
                    setSearch(data)
                } else if (category && investment === 'all') {
                    let onlyCategory = data?.filter(list => list?.category === category);
                    setSearch(onlyCategory);
                } else if (investment && category === 'all') {
                    let justInvestment = data?.filter(list => parseFloat(list?.totalCash) <= parseFloat(investment))
                    setSearch(justInvestment);
                }

                else if (category && investment !== 'all') {
                    let allCategoryAndInvestment = data?.filter(list => list?.category === category && parseFloat(list?.totalCash) <= parseFloat(investment));
                    setSearch(allCategoryAndInvestment);
                }

            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                // setIsLoading(false)
            })
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
            {
                isLoading ? <div className="sweet-loading text-center">
                    <PulseLoader
                        size={10} color={'black'} />
                </div> :
                    <div>
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
            }
        </div>
    );
};

export default FindSearchListing;
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddListing from '../../AddListing/AddListing';
import AddCategory from '../AddCategory/AddCategory';
import Test from '../Test/Test';
import './Dashboard.css';

const Dashboard = () => {

    const [select, setSelect] = useState('');
    const handleSelectItem = item => {
        setSelect(item);
    }

    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <div>
                            <h1>Dashboard</h1>
                            <h5 onClick={() => handleSelectItem('home')}>Home</h5>
                            <h5 onClick={() => handleSelectItem('addListing')}>Add new Listing</h5>
                            <h5 onClick={() => handleSelectItem('addCategory')}>Add new Category</h5>
                            <h5 onClick={() => handleSelectItem('test')}>Add new </h5>
                        </div>
                    </Col>
                    <Col xs={12} md={10}>
                        <div>
                            {
                                select === 'addListing' ? <AddListing /> : ''
                            }
                            {
                                select === 'addCategory' ? <AddCategory /> : ''
                            }
                            {
                                select === 'test' ? <Test /> : ''
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
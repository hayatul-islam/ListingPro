import React from 'react';
import Banner from '../Banner/Banner';
import TopListing from '../TopListing/TopListing';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../../Sharded/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <TopListing />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;
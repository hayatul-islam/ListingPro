import React from 'react';
import { useParams } from 'react-router-dom';

const FindSearchListing = () => {

    const { subCategory, investment } = useParams();
    console.log(subCategory, investment);
    return (
        <div>
            <h1>find</h1>
        </div>
    );
};

export default FindSearchListing;
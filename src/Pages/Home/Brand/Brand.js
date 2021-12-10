import React from 'react';
import './Brand.css';

const Brand = ({ brand }) => {


    return (
        <div className="brand-container py-4 mx-2">

            <img src={brand?.image} />
            <h6 className="pt-3">{brand?.title}</h6>

        </div>
    );
};

export default Brand;
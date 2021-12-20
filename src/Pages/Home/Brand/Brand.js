import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Brand.css';

const Brand = ({ brand }) => {

    const navigate = useNavigate();
    const brandDetail = (title) => {
        navigate(`brandDetail/${title}`);
    }

    return (
        <div onClick={() => brandDetail(brand?.title)} className="brand-container py-4 m-2 rounded">
            <img src={brand?.image} />
            <h6 className="pt-3">{brand?.title}</h6>
        </div>
    );
};

export default Brand;
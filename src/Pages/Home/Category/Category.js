import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = ({ category }) => {

    // console.log(category);
    const navigate = useNavigate();
    const brandDetail = (title) => {
        navigate(`categoryDetail/${title}`);
    }

    const path = window.location.origin;
    console.log(path);
    return (

        <div onClick={() => brandDetail(category?.name)} className="brand-container py-4 m-2 rounded">
            {/* <img src={category?.image} /> */}
            <img src={`http://localhost:4040/images/${category?.image}`} />

            <h6 className="pt-3">{category?.name}</h6>
        </div>
    );
};

export default Category;
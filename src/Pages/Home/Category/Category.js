import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = ({ category }) => {

    const navigate = useNavigate();
    const brandDetail = (title) => {
        navigate(`categoryDetail/${title}`);
    }

    return (

        <div onClick={() => brandDetail(category?.name)} className="brand-container py-4 m-2 rounded">
            {
                category?.image?.slice(0, 4) === 'http' ?
                    <img src={category?.image} />
                    :
                    <img src={`data:image/png;base64,${category?.image}`} />
            }
            <h6 className="pt-3">{category?.name}</h6>
        </div>
    );
};

export default Category;
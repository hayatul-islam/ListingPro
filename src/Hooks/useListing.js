import React, { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [subCategory, setSubCategory] = useState([]);


    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {

                setListing(data);

                // filter category 
                const subCategory = data.map(category => category.sub_category);
                let filterCategory = subCategory.filter((unique, index) => {
                    return subCategory.indexOf(unique) === index;
                });
                setSubCategory(filterCategory);

            })
    }, []);

    return {
        listing,
        subCategory
    }
};

export default useListing;
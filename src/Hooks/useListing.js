import { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [subCategory, setSubCategory] = useState([]);


    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {

                setListing(data);

                // // filter category 
                // const subCategory = data.map(category => category.sub_category);
                // let filterCategory = subCategory.filter((unique, index) => {
                //     return subCategory.indexOf(unique) === index;
                // });
                // setSubCategory(filterCategory);

            })
    }, []);

    useEffect(() => {
        fetch('https://aqueous-garden-52898.herokuapp.com/subCategory')
            .then(res => res.json())
            .then(data => setSubCategory(data))
    })

    return {
        listing,
        subCategory
    }
};

export default useListing;
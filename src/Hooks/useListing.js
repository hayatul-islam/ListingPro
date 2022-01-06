import { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [category, cubCategory] = useState([]);


    useEffect(() => {
        fetch('https://boiling-taiga-51973.herokuapp.com/listing')
            .then(res => res.json())
            .then(data => {

                setListing(data);

            })
    }, []);

    useEffect(() => {
        fetch('https://aqueous-garden-52898.herokuapp.com/category')
            .then(res => res.json())
            .then(data => cubCategory(data))
    })

    return {
        listing,
        category
    }
};

export default useListing;
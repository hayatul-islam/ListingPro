import { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [category, cubCategory] = useState([]);

    console.log(listing[0]?.image.slice(0, 5))

    useEffect(() => {
        // fetch('https://aqueous-garden-52898.herokuapp.com/listing')
        fetch('http://localhost:4040/listing')
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
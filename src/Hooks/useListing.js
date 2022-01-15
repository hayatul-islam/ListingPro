import { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [category, cubCategory] = useState([]);

    useEffect(() => {
        fetch('https://calm-dawn-39497.herokuapp.com/listing')
            // fetch('http://localhost:4040/listing')
            .then(res => res.json())
            .then(data => {
                setListing(data);

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch('https://calm-dawn-39497.herokuapp.com/category')
            .then(res => res.json())
            .then(data => cubCategory(data))
    })

    return {
        listing,
        category
    }
};

export default useListing;
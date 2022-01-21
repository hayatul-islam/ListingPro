import { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [category, cubCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setIsLoading(true);
        // fetch('https://calm-dawn-39497.herokuapp.com/listing')
        fetch('http://localhost:4040/listing')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                // setIsLoading(false);
            })
    }, []);

    useEffect(() => {
        // setIsLoading(true)
        fetch('https://calm-dawn-39497.herokuapp.com/category')
            .then(res => res.json())
            .then(data => cubCategory(data))
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                // setIsLoading(false)
            })
    })

    return {
        listing,
        category,
        isLoading
    }
};

export default useListing;
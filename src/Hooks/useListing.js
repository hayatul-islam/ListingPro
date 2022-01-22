import { useEffect, useState } from 'react';

const useListing = () => {

    const [listing, setListing] = useState([]);
    const [category, cubCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const apiLink = 'http://localhost:4040';
    const apiLink = 'https://glacial-forest-56456.herokuapp.com';

    useEffect(() => {
        // setIsLoading(true);
        fetch(`${apiLink}/listing`)
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
        fetch(`${apiLink}/category`)
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
        isLoading,
        apiLink
    }
};

export default useListing;
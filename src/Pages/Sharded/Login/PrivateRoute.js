import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from '../../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {

    const location = useLocation();
    const { isLoading, user } = useFirebase();

    if (isLoading) {
        return <div className="text-center p-5">
            <Spinner animation="border" variant="dark" />
        </div>
    }
    if (user?.email) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} />;


};

export default PrivateRoute;
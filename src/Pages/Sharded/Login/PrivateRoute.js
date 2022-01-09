import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Outlet } from "react-router-dom";
import useFirebase from '../../../Hooks/useFirebase';

const PrivateRoute = ({ user }) => {

    const { isLoading } = useFirebase();

    if (isLoading) {
        return <div className="text-center p-5">
            <Spinner animation="border" variant="dark" />
        </div>
    }

    return user.email ? <Outlet /> : <Navigate to="/login" />;


};

export default PrivateRoute;
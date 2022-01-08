import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Navigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();
    if (isLoading) {
        return <div className="text-center p-5">
            <Spinner animation="border" variant="dark" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Navigate to="/login" />
                    // <Navigate
                    //     to={{
                    //         pathname: "/login",
                    //         state: { from: location }
                    //     }}
                    // />
                )
            }
        />
    );
};

export default PrivateRoute;
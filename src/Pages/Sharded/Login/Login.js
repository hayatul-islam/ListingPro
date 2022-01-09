import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {

    const { googleSignIn, logOut, user } = useFirebase();

    const location = useLocation()
    const redirect_url = location.state?.from || '/';
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                navigate(redirect_url)
            })
    }

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="py-5">
            <Container>

                {
                    user?.email ? <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                        :
                        <button onClick={handleGoogle} className="btn btn-primary">Google</button>
                }


            </Container>
        </div>
    );
};

export default Login;
import React from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const { googleSignIn, logOut, user } = useFirebase();


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
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
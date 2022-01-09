import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Login = () => {

    const { googleSignIn, handleUserLogin, logOut, user, error } = useFirebase();

    const location = useLocation()
    const redirect_url = location.state?.from || '/';
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        handleUserLogin(data.email, data.password, location, navigate)

    };

    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                navigate(redirect_url)
            })
    }



    return (
        <div className="py-5 mt-5">
            <Container>

                <div className="registerForm shadow">
                    <div className="text-center pb-5 userLogin">
                        {/* <i className="fas fa-user "></i> */}
                        <i className="fas fa-user-astronaut"></i>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" type="email" {...register("email")} placeholder="Email address" /> <br />
                        <input className="form-control" type="password" {...register("password")} placeholder="Password" /> <br />
                        <input className="btn loginBtn btn-lg px-5 rounded-pill form-control" type="submit" value="Login" />
                    </form>
                    <div className='pt-4 d-flex align-items-center justify-content-center'>
                        <span className='fs-5'>Or <i className="fas fa-angle-double-right me-2"></i></span>
                        <button onClick={handleGoogle} className="btn btn-outline-dark fs-5 googleBtn"><i className="fab fa-google"></i></button>
                    </div>
                    <p className="text-center pt-3 text-danger">{error}</p>
                    <p className="mt-3 text-center">New User? Please, <Link to="/register">Register</Link></p>
                </div>



            </Container>
        </div>
    );
};

export default Login;
import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Register.css';

const Register = () => {

    const { handleUserRegister, error } = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newUser = { email: data.email, name: data.name }
        handleUserRegister(data.email, data.password, data.name, location, navigate);
        // axios.post('https://ancient-harbor-23487.herokuapp.com/addUsers', newUser)
        console.log(newUser);

    };

    return (
        <div className="py-2 my-5">
            <Container>
                <div className="registerForm shadow">
                    <div className="text-center pb-5 pt-3">
                        <i className="far fa-edit fs-3"></i>
                        <h4 className="text-uppercase fw-normal pt-2">Register</h4>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control  input-field"
                            name="name"
                            type="text" {...register("name")}
                            placeholder="Name" /> <br />
                        <input
                            className="form-control"
                            name="email"
                            type="email" {...register("email")}
                            placeholder="Email address" /> <br />
                        <input
                            className="form-control"
                            name="password"
                            type="password" {...register("password")}
                            placeholder="Password" /> <br />
                        <input
                            className="btn loginBtn btn-lg px-5 rounded-pill form-control"
                            type="submit"
                            value="Register" />
                    </form>
                    <p className="text-center pt-3 text-danger">{error}</p>
                    <p className="pt-4 text-center">I have Already Account. Please, <Link to="/login">Login</Link></p>
                </div>
            </Container>
        </div>
    );
};

export default Register;
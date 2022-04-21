import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Authentication.css'

const Login = () => {

    const { handleLogin, handleGoogleSignin } = useAuth();
    const { user } = useSelector(state => state.user)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data?.email;
        const password = data.password;
        handleLogin(email, password)
    };
    const navigate = useNavigate();
    const location = useLocation();
    const destination = location?.state?.from || '/'
    console.log(user)
    useEffect(() => {
        if (user?.email) {
            navigate(destination)
        }
    }, [user, location])
    return (
        <Container className='mt-5'>
            <div className='form-container login-form shadow-sm'>
                <h5 className='text-start'>Login</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='email' {...register("email", { required: true })} />
                    <br />
                    <input placeholder='password' {...register("password", { required: true })} />
                    <br />
                    {errors.password && <span>This field is required</span>}

                    <button type='submit' className='w-100 btn-regular'>Login</button>
                    <span>Don't have any account?  <Link to='/register'>Register</Link></span>
                    <h6>--or--</h6>
                    <div onClick={handleGoogleSignin} className="google-login">
                        <i className="me-3 fa-brands fa-google"></i>
                        Google Login</div>
                </form>
            </div>
        </Container>
    );
};

export default Login;
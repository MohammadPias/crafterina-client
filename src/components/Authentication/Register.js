import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import useAuth from '../Context/useAuth';
import useFirebase from './useFirebase';
// import useFirebase from './useFirebase';
// import { userRegistration } from '../Redux/User/UserAction';

const Register = () => {
    const { user } = useSelector(state => state.user)
    const { handleGoogleSignin, handleRegistration } = useFirebase();
    // const { handleRegistration } = useAuth()
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        const name = data?.name;
        dispatch(handleRegistration(email, password, name))
        console.log(data)
    };
    return (
        <Container>
            <div className='py-3'>
                <img style={{ width: '15%' }} src={logo} alt="" />
            </div>
            <div className='form-container login-form shadow-sm'>
                <h5 className='text-start'>Register</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' {...register("name")} />
                    <br />
                    <input placeholder='email' {...register("email")} />
                    <br />
                    <input placeholder='password' {...register("password", { required: true })} />
                    <br />
                    {errors.password && <span>This field is required</span>}
                    <input placeholder='re-enter password' {...register("confirmPassword", { required: true })} />
                    <br />
                    <button type='submit' className='w-100 btn-regular'>Login</button>
                    <span>Already Registered?  <Link to='/login'>Login</Link></span>
                    <h6>--or--</h6>
                    <div /* onClick={handleGoogleSignin} */ className="google-login">
                        <i className="me-3 fa-brands fa-google"></i>
                        Google Login</div>
                </form>
            </div>
        </Container>
    );
};

export default Register;
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useAuth from '../Context/useAuth';
import './Header.css'

const TopNav = () => {
    const { user } = useSelector(state => state.user)
    const { handleSignOut } = useAuth();
    return (
        <div className="border border-bottom-secondary">
            <Container>
                <div className='row'>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="logo-container py-2">
                            <img style={{ width: '50%' }} src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 nav-right">
                        <div className="nav-icon-container my-3">
                            <div className='user-container'>
                                <i className="me-5 fa-solid fa-user icon user-icon"></i>
                                <div className="user-menu text-start">
                                    {
                                        user?.email &&
                                        <div className="avatar-name d-flex align-items-center">
                                            <img src={user?.photoURL} alt="" />
                                            <Link to='' className='custom-link'>
                                                <h6>{user?.displayName}</h6>
                                            </Link>
                                        </div>
                                    }
                                    {
                                        !user?.email &&
                                        <Link to='/login' className='custom-link'>
                                            <h6>Login</h6>
                                        </Link>
                                    }
                                    {user?.email &&
                                        <button className='btn-regular-pill' style={{ cursor: 'pointer' }} onClick={handleSignOut}>
                                            Logout
                                        </button>
                                    }
                                </div>
                            </div>
                            <i className="me-5 fa-solid fa-bookmark icon"></i>
                            <i className="fa-solid fa-bag-shopping icon"></i>
                            <div className="cart-text">0</div>
                            <div className="cart-text cart-text-shop">0</div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopNav;
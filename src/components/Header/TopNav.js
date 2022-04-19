import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.svg';
import './Header.css'

const TopNav = () => {
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
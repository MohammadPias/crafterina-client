import React from 'react';
import Banner from './Banner';
import NavMenu from './NavMenu';
import TopNav from './TopNav';

const Header = () => {
    return (
        <div>
            <TopNav />
            <NavMenu />
            <Banner />
        </div>
    );
};

export default Header;
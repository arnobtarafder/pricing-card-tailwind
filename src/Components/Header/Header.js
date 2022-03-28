import React from 'react';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='mt-12'>Give me the money you have saved is a sentence</h2>
            <Pricing></Pricing>
        </div>
    );
};

export default Header;
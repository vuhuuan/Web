import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="leader-info">
                <div className='leader-avatar'></div>
                <span className='leader-name'>Your Name</span>
            </div>
        </header>
    );
};

export default Header;

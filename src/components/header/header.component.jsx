import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">

        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                SKILLS
            </Link>
            <Link className='option' to='/'>
                PROJECTS
            </Link>
            <Link className='option' to='/'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;
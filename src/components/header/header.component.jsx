import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='options'>
        <Link className='option' to='/skills'>
                SKILLS
            </Link>
            <Link className='option' to='/projects'>
                PROJECTS
            </Link>
            <Link className='option' to='/about'>
                ABOUT
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;
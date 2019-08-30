import React from 'react';

import { Link } from 'react-router-dom';

import { withRouter }  from 'react-router-dom';

import './header.styles.scss';


const Header = (match) => (

    <div className='header'>
        {/* match.location.pathname */}
        <div className='options' >
        <Link className={`${match.location.pathname === '/skills' ? 'bold' : ''} option`} to='/skills'>
                SKILLS
            </Link>
            <Link className={`${match.location.pathname === '/projects' ? 'bold' : ''} option`} to='/projects'>
                PROJECTS
            </Link>
            <Link className={`${match.location.pathname === '/about' ? 'bold' : ''} option`} to='/about'>
                ABOUT
            </Link>
            <Link className={`${match.location.pathname === '/contact' ? 'bold' : ''} option`} to='/contact'>
                CONTACT
            </Link>
            
        </div>
    </div>
)

export default withRouter(Header);
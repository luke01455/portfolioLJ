import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className='links-wrapper'>
            <div className='link' ><a href="http://github.com/luke01455" target="_blank" rel="noopener noreferrer"> GITHUB </a>
            </div>
            <div className='link' >
                <a href="http://www.linkedin.com/in/luke-john-2a4b75190/" target="_blank" rel="noopener noreferrer"> LINKEDIN </a>
            </div>
            <div className='link'>
                <Link to="/contact"> CONTACT </Link>
            </div>
        </div>
    </div>
)

export default Footer;
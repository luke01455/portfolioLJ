import React from 'react';
import './about.styles.scss';
import { Link } from 'react-router-dom';

import selfie from '../../assets/images/selfie.png'
const About = () => (
    <div className='about'>
        <span className='about-wrapper'>
        <div className= 'photo'>
        <img className='selfie' src={selfie} alt='selfie'></img>
    </div>

        <span className='info-container'>
            <p>
        I am a front-end developer who is excited to bring my skills to the workplace.
        I have a passion for web development and an excellent eye for detail.
        </p>
        <Link className='learn-more' to='/skills'>
        Learn More
        </Link>
        </span>
        </span>

    </div>
    )

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

import './skills.styles.scss';

const Skills = () => (

  <div className="skills">
      <div className="skills-wrapper">
        <div className="skills-list">
          <h2>Languages/Frameworks</h2>
          <div className='skills-holder'>
            <p> HTML </p>
            <p> CSS </p>
            <p> JAVASCRIPT / ES6 </p>
            <p> REACT </p>
          </div>
        </div>
        <div className="skills-list">
          <h2>Libraries/Other</h2>
          <div className='skills-holder'>
            <p> GIT </p>
            <p> RESPONSIVE DESIGN </p>
            <p> ADOBE XD </p>
            <p> SCSS </p>
          </div>
        </div>
      </div>
      <Link className='learn-more' to='/projects'>
        Learn More
        </Link>
  </div>
);

export default Skills;
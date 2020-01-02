import React from 'react';
import { withRouter } from 'react-router-dom';
import githubl from '../../assets/images/githubl.png';
import searchl from '../../assets/images/searchl.png';

import './project-item.styles.scss';

const ProjectItem = ({ title, description, imageUrl, gitHub, deploy, history}) => (
    <div className='project-item'>
        <div className='project-wrapper'>

            <a className='image-wrapper' href={deploy} target="_blank" rel="noopener noreferrer">

                <div className='background-image'>
                <a href={imageUrl}> 
                    <img className='project-image' src={imageUrl} alt="img"></img>
                </a>
                </div>

            </a>
            <div className='desc-text'>
                <div className='title'> {title.toUpperCase()}</div>
                <div className='description'>{description}</div>
                <div className='git-deploy-wrapper'>
                    <a href={gitHub} target="_blank" rel="noopener noreferrer">
                        <div className='github'>
                            <img src={githubl} className="github-img" alt="menu-button" />
                        </div>
                    </a>
                    <a href={deploy} target="_blank" rel="noopener noreferrer">
                        <div className='deploy'>
                            <img src={searchl} className="deploy-img" alt="menu-button" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(ProjectItem);
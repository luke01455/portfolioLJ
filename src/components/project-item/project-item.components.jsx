import React from 'react';

import githubl from '../../assets/images/githubl.png';
import searchl from '../../assets/images/searchl.png';

import './project-item.styles.scss';

const ProjectItem = ({ title, description, imageUrl, gitHub, deploy }) => (
    <div className='project-item'>
        <div className='project-wrapper'>

            <div className='image-wrapper'>
                <div className='background-image'
                    // style={{
                    //     backgroundImage: `url(${imageUrl})`
                    // }}
                    dangerouslySetInnerHTML={{__html:imageUrl}}
                    > 
                </div>
            </div>
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

export default ProjectItem;
import React from 'react';

import './project-item.styles.scss';

const ProjectItem = ({title, description, imageUrl}) => (
    <div className='project-item'>
        <div className='project-wrapper'>
            <div className='image-wrapper'>
                <div className='background-image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                </div>
            </div>
            <div className='desc-text'>
                <div> {title.toUpperCase()}
                </div>

                <div>{description}</div>

            </div>
        </div>
    </div>
)

export default ProjectItem;
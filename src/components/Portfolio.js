import React from 'react';
import { Icon } from 'semantic-ui-react';

import { projectData } from '../data/projectData';

function Portfolio() {
    return (
        <section className='portfolio-container'>
            <h2>Portfolio</h2>
            {projectData.map((project) => (
                <section className='project-card'>
                    <section className='project-thumbnail'>
                        <img src={project.thumbnail} alt={project.name} />
                    </section>

                    <section className='project-info'>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>Technologies Used: {project.tech}</p>
                        <div className='project-links'>
                            <a id="app-btn" href={project.deployed} target="_blank">
                                <Icon name='play' size='small'/>
                                DEPLOYED LINK
                            </a>
                            <a id="repo-btn" href={project.repository} target="_blank">
                                <Icon name='github' size='large'/>
                                GITHUB REPOSITORY
                            </a>
                        </div>
                    </section>
                </section>
            ))}
        </section>
    );
}

export default Portfolio;
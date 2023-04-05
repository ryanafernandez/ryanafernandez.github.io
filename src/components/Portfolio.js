import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Image,
    Text,
    Link
} from '@chakra-ui/react';

import { projectData } from '../data/projectData';

function Portfolio() {
    return (
        <Flex id='portfolio' className='portfolio content' direction='column' align='center'>
            <Heading className='content-heading'>PROJECTS</Heading>
            <Flex direction='column' align='center' gap='16'>
                {projectData.map((project) => (
                    <Flex className='project-card'>
                        <Image
                            className='project-thumbnail'
                            src={ project.thumbnail }
                            alt={ project.name }
                        />

                        <Flex className='project-info' direction='column' justify='space-around'>
                            <Heading>{project.name}</Heading>
                            <Text>{project.description}</Text>
                            <Text>Technologies Used: {project.tech}</Text>
                            <Box className='project-links'>
                                <Link href={project.deployed} target='_blank'>
                                    Live
                                </Link>
                                <Link href={project.repository} target='_blank'>
                                    Repo
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}

export default Portfolio;
import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    Grid,
    GridItem
} from '@chakra-ui/react';
import { Icon } from 'semantic-ui-react';

import aboutMePlaceholder from '../assets/images/about-placeholder.png';
import { skillsData } from '../data/skillsData';

function About() {
    return (
        <Flex id='about' className='about content' direction='column'>
            <Flex className='content-container'>
                <Flex id='about-info' direction='column'>
                    <Heading className='content-heading'><span>ABOUT ME</span></Heading>
                    <Text>
                        I'm Ryan Fernandez, a full-stack web developer. 
                        I graduated from the UC San Diego Extension Full Stack Coding Boot Camp 
                        and from San Diego State University, where I completed my 
                        Bachelor of Science in Computer Engineering.
                    </Text>
                    <br/>
                    <Text>
                        I am passionate about coding and problem solving, and I am excited to work alongside 
                        other amazing coders and continue to grow as a developer!
                    </Text>
                </Flex>
                <Image 
                    id='about-image'
                    src={ aboutMePlaceholder } 
                    alt='placeholder image'
                    borderRadius='10px'
                    // border='solid'
                    width='320px'
                    height='320px'
                    alignSelf={'center'}
                />
                
            </Flex>

            <Box className='content-container'>
                <Heading className='content-heading'><span>SKILLS</span></Heading>
                <Grid  templateColumns='repeat(6, 1fr)' gap='8'>
                    {skillsData.map((skill) => (
                        <GridItem>
                            <Flex direction='column' align='center'>
                                {skill.logo ? 
                                    <Image
                                        className='skill-logo'
                                        src={ skill.logo }
                                        alt={ skill.tech }
                                    />
                                    :
                                    <Icon name={skill.icon} size='huge'/>
                                }
                                <Text className='skillsText'>
                                    {skill.tech}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            
        </Flex>
    );
}

export default About;
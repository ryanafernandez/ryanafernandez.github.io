import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Heading
} from '@chakra-ui/react';

import aboutMePlaceholder from '../assets/images/about-placeholder.png';

function About() {
    return (
        <Flex id='about' className='about content' direction='column' align='center'>
            <Heading className='content-heading'>ABOUT ME</Heading>
            <Flex className='content-container'>
                <Image 
                    id='about-image'
                    src={ aboutMePlaceholder } 
                    alt='placeholder image'
                    borderRadius='full'
                    border='solid'
                    width='320px'
                    height='320px'
                    alignSelf={'center'}
                />
                <Box id='about-info'>
                    <Text>
                        Hello! I'm Ryan Fernandez, a full-stack web developer with a background in Computer Engineering. 
                        Recently, I graduated from the UC San Diego Extension Full Stack Coding Boot Camp. 
                        I also attended San Diego State University, where I completed my 
                        Bachelor of Science in Computer Engineering.
                    </Text>
                    <br/>
                    <Text>
                         I am passionate about coding and problem solving, and I am excited to work alongside 
                         other amazing coders and continue to grow as a developer!
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default About;
import React from 'react';
import {
    Flex,
    Box,
    Text,
    Heading,
    UnorderedList,
    ListItem,
    Link
} from '@chakra-ui/react';

import { Icon } from 'semantic-ui-react';

import resume from '../assets/Ryan-Fernandez-Resume.pdf';

function Header() {
    return (
        <Flex id='header' className='header' direction='column' justify='center' align='center'>
            <Flex className='headerInfo' direction='column' gap='24px'>
                <Heading>Hello! I'm Ryan.</Heading>
                <Text>A Full-Stack Web Developer with a passion for problem solving and creating user-friendly web applications.</Text>
                <Flex className='headerLinks' align='center' justify='space-evenly'>
                    <Link 
                        id='resumeLink'
                        className='resumeLink' 
                        href={resume}
                        alt="Ryan Fernandez's resume"
                        target="_blank"
                        color="#fff"
                    >
                            Resume
                    </Link>

                    <Flex className='socialsLinks' align='center' justify='space-evenly'>
                        <Link href='https://github.com/ryanafernandez' target='_blank'>
                            <Icon name='github' size='huge'/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/ryan-a-fernandez/' target='_blank'>
                            <Icon name='linkedin' size='huge'/>
                        </Link>
                        <Link href='mailto:ryanfernandez11@gmail.com' target='_blank'>
                            <Icon name='mail' size='huge'/>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>

            <Box className='headerContinue'>
                <Flex id='header-nav' direction='column' justify='center' align='center'>
                    <Link href='#about'>
                        ABOUT ME
                    </Link>
                    <Link href='#portfolio'>
                        MY WORK
                    </Link>
                    <Link href='#contact'>
                        CONTACT ME
                    </Link>
                </Flex>
                <Link href='#about'>
                    <Icon name='angle down' size='big'/>
                </Link>
            </Box>
            
        </Flex>
    );
}

export default Header;
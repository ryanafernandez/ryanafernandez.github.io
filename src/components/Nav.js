import React from 'react';
import {
    Flex,
    Box,
    Heading,
    UnorderedList,
    ListItem,
    Link
} from '@chakra-ui/react';

function Nav() {
    return (
        <Flex className='nav-bar' justify='space-between' align='center'>
                <Heading>
                    <Link id='brand' href='#header'>
                        RYAN FERNANDEZ
                    </Link>
                </Heading>

            <UnorderedList className='nav-links'>
                <ListItem className='nav-item'>
                    <Link href='#about'>ABOUT ME</Link>
                </ListItem>
                <ListItem className='nav-item'>
                    <Link href='#portfolio'>MY WORK</Link>
                </ListItem>
                <ListItem className='nav-item'>
                    <Link href='#contact'>CONTACT ME</Link>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default Nav;
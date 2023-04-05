import React from 'react';
import {
    Flex,
    Box,
    Heading,
    UnorderedList,
    ListItem,
    Link
} from '@chakra-ui/react';

function Header() {
    return (
        <Flex className='header' justify='space-between' align='center'>
            <Box className='brand'>
                <Heading>RYAN FERNANDEZ</Heading>
            </Box>

            <UnorderedList className='navigation'>
                <ListItem className='nav-item'>
                    <Link href='#about'>ABOUT</Link>
                </ListItem>
                <ListItem className='nav-item'>
                    <Link href='#portfolio'>PORTFOLIO</Link>
                </ListItem>
                <ListItem className='nav-item'>
                    <Link href='#contact'>CONTACT</Link>
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default Header;
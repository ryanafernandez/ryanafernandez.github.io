import React from 'react';
import {
    Flex,
    Box,
    Link,
    Text
} from '@chakra-ui/react';
import { Icon } from 'semantic-ui-react';

function Footer() {
    return (
        <Flex className='footer' direction='column' align='center' justify='space-between' bg='#f0f0f0'>
            <Box className='footer-links'>
                <Link href='https://github.com/ryanafernandez' target='_blank'>
                    <Icon name='github' size='big'/>
                </Link>
                <Link href='https://www.linkedin.com/in/ryan-a-fernandez/' target='_blank'>
                    <Icon name='linkedin' size='big'/>
                </Link>
                <Link href='mailto:ryanfernandez11@gmail.com' target='_blank'>
                    <Icon name='mail' size='big'/>
                </Link>
            </Box>
            <Box>
                <Text>Ryan Fernandez 2023</Text>
            </Box>
        </Flex>
    );
}

export default Footer;
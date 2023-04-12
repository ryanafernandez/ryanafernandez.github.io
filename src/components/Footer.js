import React from 'react';
import {
    Flex,
    Box,
    Link,
    Text
} from '@chakra-ui/react';
import { Icon } from 'semantic-ui-react';

function Footer() {

    const today = new Date();

    return (
        <Flex className='footer' direction='column' align='center' justify='space-between'>
            <Box>
                <Text>Ryan Fernandez {today.getFullYear()}</Text>
            </Box>
        </Flex>
    );
}

export default Footer;
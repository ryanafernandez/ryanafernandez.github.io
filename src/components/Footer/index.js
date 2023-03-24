import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Box,
         FooterLink,
         Row,
         Text
} from './FooterStyles';

function Footer() {
    return (
        <Box>
            <Row>
                <FooterLink
                    href='https://github.com/ryanafernandez' 
                    target='_blank'>
                        <Icon name='github' size='large'/>
                </FooterLink>
                <FooterLink
                    href='https://www.linkedin.com/in/ryan-a-fernandez/' 
                    target='_blank'>
                        <Icon name='linkedin' size='large'/>
                </FooterLink>
                <FooterLink
                    href='mailto:ryanfernandez11@gmail.com' 
                    target='_blank'>
                        <Icon name='mail' size='large'/>
                </FooterLink>
            </Row>
            <Row>
                <Text>Ryan Fernandez</Text>
            </Row>
        </Box>
    );
}

export default Footer;
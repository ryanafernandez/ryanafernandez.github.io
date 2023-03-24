import React from 'react';
import { Icon } from 'semantic-ui-react';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-links'>
                <a
                    href='https://github.com/ryanafernandez' 
                    target='_blank'>
                        <Icon name='github' size='large'/>
                </a>
                <a
                    href='https://www.linkedin.com/in/ryan-a-fernandez/' 
                    target='_blank'>
                        <Icon name='linkedin' size='large'/>
                </a>
                <a
                    href='mailto:ryanfernandez11@gmail.com' 
                    target='_blank'>
                        <Icon name='mail' size='large'/>
                </a>
            </div>
            <div>
                <p>Ryan Fernandez</p>
            </div>
        </footer>
    );
}

export default Footer;
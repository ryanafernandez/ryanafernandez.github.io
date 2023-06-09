import React, { useState, useRef } from 'react';
import { 
    Box,
    Text,
    Heading, 
    Flex, 
    FormControl, 
    Input, 
    Button, 
    Textarea,
    Link,
} from '@chakra-ui/react';

import { Icon } from 'semantic-ui-react';
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            // submit from
            console.log(contactForm);
            emailjs.sendForm('service_f4g15lo', 'portfolio_contact_form', form.current, 't5FijVelY7TTqvyN_')
                .then(function() {
                    console.log('SUCCESS');
                }, function(error) {
                    console.log('Faileed', error);
            });

            // reset contactForm
            setContactForm({ ...contactForm,
                name: '',
                email: '',
                message: ''
            });

        } catch (err) {
            console.error(err);
        }
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContactForm({ ...contactForm, [name]: value });
    };

    return (
        <Flex id='contact' className='contact content' direction='column' align='center'>
            
            
            <Flex className='content-container' justify='space-evenly'>
                <Flex className='contact-text' direction='column' gap='8px'>
                    <Heading className='content-heading'><span>CONTACT ME</span></Heading>
                    <Text>
                        Have a question or want to work together?
                    </Text>
                    <Text>
                        Leave a message for me here or use the links below and I'll get back to you as soon as possible.
                    </Text>
                    <Flex className='contact-links' justify='space-evenly'>
                        <Link href='https://www.linkedin.com/in/ryan-a-fernandez/' target='_blank'>
                            <Icon name='linkedin' size='big'/>
                        </Link>
                        <Link href='https://github.com/ryanafernandez' target='_blank'>
                            <Icon name='github' size='big'/>
                        </Link>
                        <Link href='mailto:ryanfernandez11@gmail.com' target='_blank'>
                            <Icon name='mail' size='big'/>
                        </Link>
                    </Flex>
                </Flex>

                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <Input
                        placeholder="Name"
                        value={contactForm.name}
                        name="name"
                        className="contact-input"
                        onChange={handleChange}
                    ></Input>
                    <FormControl isRequired>
                        <Input
                            type="email"
                            placeholder="Email"
                            value={contactForm.email}
                            name="email"
                            className="contact-input"
                            onChange={handleChange}
                        ></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <Textarea
                            id="contact-message"
                            type="text"
                            placeholder="Message"
                            value={contactForm.message}
                            name="message"
                            className="contact-input"
                            onChange={handleChange}
                        ></Textarea>
                    </FormControl>
                    <Button alignSelf='flex-start' variant='outline' type='submit'>Submit</Button>
                </form>
            </Flex>
        </Flex>
    );
}

export default Contact;
import React, { useState } from 'react';
import { 
    Box,
    Text,
    Heading, 
    Flex, 
    FormControl, 
    Input, 
    Button, 
    Textarea
} from '@chakra-ui/react';

function Contact() {
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
            <Heading className='content-heading'>CONTACT</Heading>
            
            <Flex justify='space-evenly'>
                <Box className='contact-text'>
                    <Text>
                        Have a question or want to work together? 
                        Leave a message and I'll get back to you as soon as possible.
                    </Text>
                    <br/>
                    <Text>
                        You can also email me directly at:
                        <a href='mailto:ryanfernandez11@gmail.com' target='_blank'> RYANFERNANDEZ11@GMAIL.COM</a>
                    </Text>
                </Box>

                <form className="contact-form" onSubmit={handleSubmit}>
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
                    <Button alignSelf='center' variant='outline' type='submit'>Submit</Button>
                </form>
            </Flex>
        </Flex>
    );
}

export default Contact;
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
            <Heading>Contact</Heading>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <Text>
                    Have a question or want to work together? 
                    Leave a message and I'll get back to you as soon as possible.
                </Text>
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
                <Button alignSelf='flex-end' variant='outline' type='submit'>Submit</Button>
            </form>
        </Flex>
    );
}

export default Contact;
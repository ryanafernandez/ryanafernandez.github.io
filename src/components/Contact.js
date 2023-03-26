import React, { useState } from 'react';

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
        <div>
            <h1>Contact</h1>
            <p>Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={contactForm.name}
                    name="name"
                    className="contact-input"
                    onChange={handleChange}
                ></input>
                <input
                    type="email"
                    placeholder="Email"
                    value={contactForm.email}
                    name="email"
                    className="contact-input"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Message"
                    value={contactForm.message}
                    name="message"
                    className="contact-input"
                    onChange={handleChange}
                ></input>
                <button className="contact-submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
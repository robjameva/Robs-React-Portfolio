import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import TextField from '@mui/material/TextField';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    return (
        <section className='text-bg'>
            <h1 data-testid='h1tag'>Contact me</h1>
            <ol className='list-container'>
                <li><a href="mailto:rob.evanik@gmail.com"> 📧 rob.evanik@gmail.com</a></li>
                <li>☎️ (973) 919-5256</li>
                <li>📝 Or you can use this form below</li>
            </ol>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label="Name"
                        color="info"
                        focused
                        required
                        name="name"
                        onMouseOut={handleChange}
                        margin="normal"
                    // sx={{ color: 'text.primary' }}
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        color="info"
                        focused
                        required
                        name="email"
                        onMouseOut={handleChange}
                        margin="normal" />
                </div>
                <div>
                    <TextField
                        label="Message"
                        color="info"
                        focused
                        required
                        multiline
                        fullWidth
                        rows={6}
                        name="message"
                        onMouseOut={handleChange}
                        margin="normal"
                    />
                </div>

                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button data-testid='btntag' type='submit'>🚀 Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
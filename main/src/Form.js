import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import { useForm, ValidationError } from '@formspree/react';
// import { config, configDotenv } from 'dotenv';

// config({path: '.env'});

export default function FormPro() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
                submitting: false,
                submitted: false,
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        // @ts-ignore
        // const formspree = process.env.REACT_APP_FORM_URI;
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xrgjabgr', // || '{ process.env.REACT_APP_FORM_URI }',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(true, 'Message Submitted Successfully. Thank you!');
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <>
            <Box id='email' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} align={'center'}>
                <Typography variant='h4' align='center' component='h2' sx={{ mb: 2 }}>
                    Contact Today to Sign Up!
                </Typography>
                <form onSubmit={handleOnSubmit} method='POST'>
                    <FormLabel htmlFor='email'></FormLabel>
                    <TextField
                        id='email'
                        fullWidth
                        type='email'
                        placeholder='Enter your email.'
                        name='_replyto'
                        aria-colspan={80}
                        rows={8}
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                    />
                    <Divider variant='middle' textAlign='center' sx={{ color: 'primary' }} />
                    <FormLabel htmlFor='message'></FormLabel>
                    <TextField
                        id='message'
                        fullWidth
                        name='message'
                        placeholder='Enter your message.'
                        aria-colspan={80}
                        rows={8}
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                    />
                    <Divider variant='middle' textAlign='center' sx={{ color: 'primary' }} />
                    <Button variant='contained' type='submit' fullWidth disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                    </Button>
                </form>
            </Box>
            {status.info.error && <div className='error'>Error: {status.info.msg}</div>}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </>
    );
}

/* export function ContactForm() {
    const [state, handleSubmit] = useForm('xvoeyyjd');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input id='email' type='email' name='email' />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
            <textarea id='message' name='message' />
            <ValidationError prefix='Message' field='message' errors={state.errors} />
            <button type='submit' disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
} */

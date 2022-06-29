import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import '.././styles/contactPageStyle.css';
import Box from '@mui/material/Box';
import { formControlClasses } from '@mui/material';
import { auto } from '@popperjs/core';

const Contact = () => {
    const submit = () => {
        if (name && email && message) {
           const serviceId = 'service_vdb5u4t';
           const templateId = 'template_o9rossp';
           const userId = 'OQkpPSe66j-TNNpSX';
           const templateParams = {
               name,
               email,
               message
           };

           emailjs.send(serviceId, templateId, templateParams, userId)
               .then(response => console.log(response))
               .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(email))
        return <div>'Invalid Email Address'</div>
        // return regex.test(String(email).toLowerCase());
    };

    const EmailValidation = (event) => {
        var form = document.getElementById("form");
        var email = document.getElementById("email");
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
        if(email.match(regex)){
            return;
        }
    } 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    return (
        <div className='inputStyle'>
        <h3>Leave a message</h3> 
        <input 
        type="text" 
        placeholder="Enter your Name" 
        value={name} 
        onChange={e => setName(e.target.value)} />

        <input 
        type="email" 
        placeholder="Enter your email address" 
        value={email} 
        onChange={
            e => setEmail(e.target.value)} />
        
        
        <textarea style={{width:"100%", height: "200px"}} 
        placeholder="Enter your message" 
        value={message} 
        onChange={e => setMessage(e.target.value)}>

        </textarea>
        {emailSent && <p>Thank you for your message, I will get in touch with you soon.</p>}
            <button className='buttonStyle' onClick={submit}>Send Message</button>
        </div>
    );
};

export default Contact;

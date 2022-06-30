import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {TextField, Box} from '@material-ui/core';
import '.././styles/contactPageStyle.css';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Contact = () => {
    const error = false;
    const submit = () => {
        if(name.length <=1){
            setShowAlertName(true);
            error =true;
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(email)){
        setShowAlertEmail(true);
        error=true
        }

        if (name && email && message && error===false) {
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

            setShowAlertName(false);
            setShowAlertEmail(false)
;        } else {
            alert('Please fill in all fields.');
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    
    const [showAlertName, setShowAlertName] = useState(false);
    const [showAlertEmail, setShowAlertEmail] = useState(false);

    const handleName = (event) => {
        //Set name
        setName(event.target.value);
    }

    const handleEmail= (event) => {
        //Set Email
        setEmail(event.target.value)
    }

    const handleMessage= (event) => {
        //Set message
        setMessage(event.target.value);
    }

    return (
        <div className='inputStyle'>
        <h2 className='textStyle'>Leave a message</h2>
        <TextField
          variant="filled"
          id="outlined-basic"
          label="Name"
          value={name}
          inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}} 
          onChange={handleName}  
        />
        {name.length <=1
        ?  (<div className='alertStyle'><PanToolAltIcon /> Minimum characters 2 required</div>)
        : (<div></div>)
        }

        <TextField
          variant="filled"
          id="outlined-basic"
          label="Email Address"
          value={email}
          inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}} 
          onChange={handleEmail}
        />
        {!regex.test(email)
        ? (<div className='alertStyle'><PanToolAltIcon /> Valid Email required</div>)
        : (<div></div>)
        }
   
        <TextField
          id="filled-multiline-flexible"
          label="Message"
          multiline
          maxRows={1000}
          minRows={4}
          value={message}
          onChange={handleMessage}
          variant="filled"
        />


        {emailSent && <p className='textStyle'>Thank you for your message, I will get in touch with you soon.</p>}
            <button className='buttonStyle' onClick={submit}>Send Message</button>
        </div>
    );
};

export default Contact;

import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import axios from 'axios';

function Contact() {
    const formState = {
        name: "",
        email: "",
        message: ""
    }
    const [ { name, email, message }, setFormState ] = useState(formState);
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    
    const clearForm = () => {
        setFormState({ name: '', email: '', message: '' });
    }

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage('Email Invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`Please enter your ${e.target.name}!`)
            } else {
                setErrorMessage('');
            }
        }
        setFormState({...formState, [e.target.name]: e.target.value })

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    

    async function submitHandler(e) {
        e.preventDefault();
        try {
            await axios({ 
                method: "POST",
                url: "http://127.0.0.1:3000/send",
                data: {
                    name: name,
                    email: email,
                    message: message
                }
            }).then((response) => {
                if(response.data.status === 'success') {
                    alert('Message Sent!');
                    setConfirmationMessage('Message Sent!');
                } else if (response.data.status === 'fail') {
                    alert('Message Failed to send.');
                    setConfirmationMessage('Failed to send message.');
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
       <div className="container col-md-3 contact">
        <h2 className="contact-header">Contact Me!</h2>
        <form id="contactform" className="contact-form" onSubmit={submitHandler}>
            <div className="form-group" key='username'>
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
            </div>
            <div className="form-group" key='userEmail'>
                <label htmlFor="email">Email Address:</label>
                <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
            </div>
            <div key='userMessage'>
                <label htmlFor="message">Your Message:</label>
                <textarea className="form-control" name="message" rows="4" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            {confirmationMessage && (
                <div>
                    <p className="error-text">{confirmationMessage}</p>
                </div>
            )}
            <button type="submit" className="btn btn-secondary contact-btn">Send</button>
        </form>
       </div>
    )
};

export default Contact;
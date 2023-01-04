import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import axios from 'axios';
import config from "../../utils/config";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

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

    

    function submitHandler(event) {
        event.preventDefault();

        async function sendToAxios() {
                const promise = await axios({ 
                method: "POST",
                url: `http://${config.SERVER_URI}/send`,
                data: {
                    name: formState.name,
                    email: formState.email,
                    message: formState.message
                }
            })

            const dataPromise = promise.then((response) => { return response.status; });
            console.log(dataPromise);
            return dataPromise;
        }

        sendToAxios().then(dataPromise => {
            console.log(dataPromise);
        });

        setConfirmationMessage('Message Sent!')
    };

    return(
       <div className="container col-md-3 contact">
        <h2 className="contact-header">Contact Me!</h2>
        <form id="contactform" className="contact-form" onSubmit={submitHandler}>
            <div className="form-group" key='username'>
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" defaultValue={formState.name} onBlur={handleChange}></input>
            </div>
            <div className="form-group" key='userEmail'>
                <label htmlFor="email">Email Address:</label>
                <input className="form-control" type="email" name="email" defaultValue={formState.email} onBlur={handleChange}></input>
            </div>
            <div key='userMessage'>
                <label htmlFor="message">Your Message:</label>
                <textarea className="form-control" name="message" rows="4" defaultValue={formState.message} onBlur={handleChange}/>
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
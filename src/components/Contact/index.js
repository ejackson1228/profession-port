import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    const toastifySuccess = () => {
        toast('Message sent!', {
            autoClose: 5000,
            position: 'bottom-right',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            toastId:'notifyToast',
        })
    }

    const onSubmit = async (data) => {
        const { name, email, message } = data;
        try {
            setDisabled(true);

            const formValues = {
                name,
                email,
                message
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formValues,
                process.env.REACT_APP_PUBLIC_KEY
            );

            reset();

            toastifySuccess();

            setDisabled(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
      <div className="container col-md-3 contact">
        <h2 className="contact-header">Contact Me!</h2>
        <form
          id="contactform"
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group" key="username">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              {...register('name', {
                required: {
                    value: true,
                    message: 'Please enter your name!'
                }
              })}
              
              
              placeholder = "Your Name..."
            ></input>
            {errors.name && <span className="error-text">{errors.name.message}</span>}
          </div>
          <div className="form-group" key="userEmail">
            <label htmlFor="email">Email Address:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              
              
              placeholder= "Your email address..."
            ></input>
            {errors.email && 
            (<span className="error-text">Please enter a valid email address!</span>
            )}
          </div>
          <div key="userMessage">
            <label htmlFor="message">Your Message:</label>
            <textarea
              className="form-control"
              name="message"
              rows="4"
              {...register('message', {
                required: true
              })}
              placeholder="Your message here..."
            />
            {errors.message && (
                <span className="error-text">Please enter a message!</span>
            )}
          </div>
          <button type="submit" disabled={disabled} className="btn btn-secondary contact-btn">
            Send
          </button>
          <ToastContainer />
        </form>
      </div>
    );
};

export default Contact;

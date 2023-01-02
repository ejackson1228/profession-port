const router = require('express').Router();
const { 
    getAll,
    getContactByName,
    addContact
} = require('../../controllers/contact-controller');

router
    .route('/')
    .post(addContact)
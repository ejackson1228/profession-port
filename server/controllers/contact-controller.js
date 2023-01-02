const { Contact } = require('../models');

const contactController = {
    getAll(req, res) {
        Contact.find({})
        .select('-__v')
        .sort({createdAt: -1})
        .then(contactData => res.json(contactData))
        .catch(err => res.status(400).json(err))
    },
    getContactByName({ params}, res) {
        Contact.find({ name: params.name })
        .select('-__v')
        .sort({createdAt: -1})
        .then(contactData => res.json(contactData))
        .catch(err => res.status(400).json(err))
    },
    addContact({ body }, res) {
        Contact.create(body)
        .then(contactData => res.json(contactData))
        .catch(err => res.status(400).json(err))
    }
    
};

module.exports = contactController;
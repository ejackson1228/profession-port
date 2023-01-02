const { Schema, model } = require('mongoose');
const formatDate = require('../utils/dateFormat');


const ContactSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
            minLength: 1
        },
        email: {
            type: String,
            required: true,
            trim: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => formatDate(createdAtVal)
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

ContactSchema.virtual('messageCount').get(function() {
    return this.length;
});

const Contact = model('Contact', ContactSchema)

module.exports = Contact;
const express = require('express');
const app = express();
const path = require('path');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.post('/send', cors(), async(req, res) => {
    let message = req.body.message;
    let name = req.body.name;
    let email = req.body.email;
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })
    //verify connection on config
    transport.verify(function(error, success) {
        if(error) {
            console.log(error)
        } else {
            console.log("Server is ready to take messages.")
        }
    });

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "ejackson1228@gmail.com",
        subject: "New message from Portfolio",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Here is your email!</h2>
        <p>Email from ${name}</p>
        <p>Sent from: ${email}</p>
        <p>${message}</p>
        </div>
        `
    }).then(console.log('Sending Message...'))

});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
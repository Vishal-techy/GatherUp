const routes = require('express').Router();
const {user} = require('../models')
const accountSid = 'ACafa5dd6f66dac1e97e894923ca8da35a';
const authToken = '09fdb9f05422285d4b147b8d1354c34d';
const client = require('twilio')(accountSid, authToken);
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'dharan731@gmail.com',
        pass:'vjtlmkjfjngksvso'
    }
}) 

//get all users registered for an event
routes.get('/:eventId', (req, res) => {
    var recipients = [];
    user.findAll({
        where: {
            eventId: req.params.eventId
        }
    }).then((users) => {

        users.forEach(user => {
            recipients.push('whatsapp:' + user.mobile);
        });  
        recipients.forEach(recipient => {
            client.messages
                .create({
                    body: 'Ada',
                    from: 'whatsapp:+14155238886',
                    to: recipient
                })
            });
    }).catch((err) => {
        res.json(err), 500;
    })
})

routes.post('/:eventId', (req, res) => {
    var recipients = [];
    var emailRecipients = [];
    user.findAll({
        where: {
            eventId: req.params.eventId
        }
    }).then((users) => {

        users.forEach(user => {
            recipients.push('whatsapp:' + user.mobile);
            emailRecipients.push(user.email);
        });  

        emailRecipients.forEach(recipient => {
            const options = {
                from:"dharan731@gmail.com",
                to:recipient,
                subject: req.body.title,
                text: req.body.description
            }
            
            transporter.sendMail(options,function(err,info){
                if (err) {
                    res.send(err)
                }
                else{
                    res.send("Sent Successfully")
                }
            })
        })

        recipients.forEach(recipient => {
            client.messages
                .create({
                    body: req.body.description,
                    from: 'whatsapp:+14155238886',
                    to: recipient
                })
            });
        res.send({message: "Sent Successfully"})
    }).catch((err) => {
        res.json(err), 500;
    })
})



module.exports = routes;
const routes = require('express').Router();
const {user} = require('../models')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'dharan731@gmail.com',
        pass:'vjtlmkjfjngksvso'
    }
}) 

//get all users registered for an event
routes.post('/:eventId', (req, res) => {
    var recipients = [];
    user.findAll({
        where: {
            eventId: req.params.eventId
        }
    }).then((users) => {

        users.forEach(user => {
            recipients.push(user.email);
        });  
        recipients.forEach(recipient => {
            const options = {
                from:"dharan731@gmail.com",
                to:recipient,
                subject: req.body.subject,
                text: req.body.text
            }
            
            transporter.sendMail(options,function(err,info){
                if (err) {
                    res.send(err)
                }
                else{
                    res.send("Sent Successfully")
                }
            })
            });
    }).catch((err) => {
        res.json(err), 500;
    })
})

module.exports = routes;
const routes = require('express').Router();
const {user} = require('../models')
const accountSid = 'ACafa5dd6f66dac1e97e894923ca8da35a';
const authToken = '09fdb9f05422285d4b147b8d1354c34d';
const client = require('twilio')(accountSid, authToken);

//get all users registered for an event
routes.get('/:eventId', (req, res) => {
    user.findAll({
        where: {
            eventId: req.params.eventId
        }
    }).then((users) => {
        res.json(users), 200;
    }).catch((err) => {
        res.json(err), 500;
    })
})


routes.post('/', (req, res) => { 
    user.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        age: req.body.age,
        address: req.body.address,
        occupation: req.body.occupation,
        bloodGroup: req.body.bloodGroup,
        eventId: req.body.eventId
    }).then((user) => {
        client.messages
                .create({
                    body: `Greetings ${user.name}!, Thanks for sigining up for the event, We will get back to you soon.`,
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:' + user.mobile
                })
                .then(message =>
                    res.send(message))
    }).catch((err) => {
        res.send(err), 500;
    })
});

module.exports = routes;
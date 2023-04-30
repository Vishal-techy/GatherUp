const routes = require('express').Router();
const {event} = require('../models')


routes.get('/:userId', (req, res) => { 
    event.findAll({where : {userId : req.params.userId}}).then((events) => {
        res.json(events), 200;
    }).catch((err) => {
        res.json(err), 500;
    })
});

routes.post('/', (req, res) => { 
    event.create({
        name: req.body.title,
        userId : req.body.userId,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        timings: req.body.timings,
        venue: req.body.venue,
        contact: req.body.contact,
        thumbnail : req.body.thumbnail

    }).then((event) => {
        console.log(event, "Heyyy");
        res.send(event), 200;
    }).catch((err) => {
        res.send(err), 500;
    })
});

routes.get('/:id', (req, res) => {
    event.findOne({
        where: {
            id: req.params.id
        }
    }).then((event) => {
        res.json(event), 200;
    }).catch((err) => {
        res.json(err), 500;
    })
})

module.exports = routes;
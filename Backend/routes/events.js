const routes = require('express').Router();
const {template} = require('../models')
const {event} = require('../models')
const fs = require('fs');

routes.post('/', (req, res) => { 
    template.create({
        templateId : req.body.templateId,
        userEventId : req.body.userEventId,
        userId: req.body.userId,
        heroText: req.body.heroText,
        eventTitlteEloborated: req.body.eventTitlteEloborated,
        supportingText: req.body.supportingText,
        speakerOne: req.body.speakerOne,
        speakerTwo: req.body.speakerTwo,
        speakerOneTitle: req.body.speakerOneTitle,
        speakerTwoTitle: req.body.speakerTwoTitle,
        speakerOneImage: req.body.speakerOneImage,
        speakerTwoImage: req.body.speakerTwoImage,
        videoLink : req.body.videoLink,
        twitter : req.body.twitter,
        facebook : req.body.facebook,
        instagram : req.body.instagram,
    }).then((template) => {
        res.json(template), 200;
    }).catch((err) => {
        res.send(err), 500;
    })
});

routes.get('/:userId/:userEventId', (req, res) => {

    template.findOne({where: {userId: req.params.userId, userEventId: req.params.userEventId}}).then((event) => {
       if(event.templateId === 1){
        fs.readFile('templates/index.html', 'utf8', (err, html) => {
            if (err) throw err;

            // Replace the content of the <p> tag with id="my-paragraph"
            var newHtml = html.replace('{{name}}', event.heroText);
           
            newHtml = newHtml.replace('{{eventTitle}}', event.eventTitlteEloborated);
            newHtml = newHtml.replace('{{supportingText}}', event.supportingText);

            newHtml = newHtml.replace('{{speakerOne}}', event.speakerOne);
            newHtml = newHtml.replace('{{speakerTwo}}', event.speakerTwo);
            newHtml = newHtml.replace('{{speakerOneTitle}}', event.speakerOneTitle);
            newHtml = newHtml.replace('{{speakerTwoTitle}}', event.speakerTwoTitle);
            newHtml = newHtml.replace('{{speakerOneImage}}', event.speakerOneImage);
            newHtml = newHtml.replace('{{speakerTwoImage}}', event.speakerTwoImage);
            newHtml = newHtml.replace('{{videoLink}}', event.videoLink);
            newHtml = newHtml.replace('{{twitter}}', event.twitter);
            newHtml = newHtml.replace('{{facebook}}', event.facebook);
            newHtml = newHtml.replace('{{instagram}}', event.instagram);


            // Send the modified HTML as the response
            res.send(newHtml);
          });
       }else if(event.templateId === 2){
        fs.readFile('templates/index2.html', 'utf8', (err, html) => {
            if (err) throw err;

            // Replace the content of the <p> tag with id="my-paragraph"
            var newHtml = html.replace('{{name}}', event.heroText);
           
            newHtml = newHtml.replace('{{eventTitle}}', event.eventTitlteEloborated);
            newHtml = newHtml.replace('{{supportingText}}', event.supportingText);

            newHtml = newHtml.replace('{{speakerOne}}', event.speakerOne);
            newHtml = newHtml.replace('{{speakerTwo}}', event.speakerTwo);
            newHtml = newHtml.replace('{{speakerOneTitle}}', event.speakerOneTitle);
            newHtml = newHtml.replace('{{speakerTwoTitle}}', event.speakerTwoTitle);
            newHtml = newHtml.replace('{{speakerOneImage}}', event.speakerOneImage);
            newHtml = newHtml.replace('{{speakerTwoImage}}', event.speakerTwoImage);
            newHtml = newHtml.replace('{{videoLink}}', event.videoLink);
            newHtml = newHtml.replace('{{twitter}}', event.twitter);
            newHtml = newHtml.replace('{{facebook}}', event.facebook);
            newHtml = newHtml.replace('{{instagram}}', event.instagram);


            // Send the modified HTML as the response
            res.send(newHtml);
          });
       }else{
        fs.readFile('templates/index.html', 'utf8', (err, html) => {
            if (err) throw err;

            // Replace the content of the <p> tag with id="my-paragraph"
            var newHtml = html.replace('{{name}}', event.heroText);
           
            newHtml = newHtml.replace('{{eventTitle}}', event.eventTitlteEloborated);
            newHtml = newHtml.replace('{{supportingText}}', event.supportingText);

            newHtml = newHtml.replace('{{speakerOne}}', event.speakerOne);
            newHtml = newHtml.replace('{{speakerTwo}}', event.speakerTwo);
            newHtml = newHtml.replace('{{speakerOneTitle}}', event.speakerOneTitle);
            newHtml = newHtml.replace('{{speakerTwoTitle}}', event.speakerTwoTitle);
            newHtml = newHtml.replace('{{speakerOneImage}}', event.speakerOneImage);
            newHtml = newHtml.replace('{{speakerTwoImage}}', event.speakerTwoImage);
            newHtml = newHtml.replace('{{videoLink}}', event.videoLink);
            newHtml = newHtml.replace('{{twitter}}', event.twitter);
            newHtml = newHtml.replace('{{facebook}}', event.facebook);
            newHtml = newHtml.replace('{{instagram}}', event.instagram);


            // Send the modified HTML as the response
            res.send(newHtml);
          });
       }
    }).catch((err) => {
        res.json(err), 500;
    })
})


module.exports = routes;
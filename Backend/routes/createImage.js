const routes = require('express').Router();
const axios = require('axios')
const http = require('http');
const https = require('https');

const API_KEY = "bb_pr_afc95961f0566975cb421621f0f14c"
const WBK_HOOK_URL = "bb_wh_ea9370f10e7873deb1a0a658d2f7c6"

routes.post('/', (req, res) => {
    axios.post('https://api.bannerbear.com/v2/images', {
        template: "gdeyVMZOGjaYZ4QmW6",
        modifications: [
          {
            name: "rectangle_background",
            color: null
          },
          {
            name: "logo_container",
            image_url: "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
          },
          {
            name: "event_name",
            text: req.body.eventName,
            color: null,
            background: null
          },
          {
            name: "event_role",
            text: req.body.eventSubText,
            color: null,
            background: null
          },
          {
            name: "qr_code",
            target: req.body.link
          },
          {
            name: "company",
            text: req.body.aboutCompany,
            color: null,
            background: null
          },
          {
            name: "name",
            text: req.body.name,
            color: null,
            background: null
          },
          {
            name: "job_name",
            text: req.body.date,
            color: null,
            background: null
          }
        ],
      }, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
      }).then((urlData) => {
        // res.json(response.data), 200;
        setTimeout(async () => {
            const urlResponse = await axios.get(`https://api.bannerbear.com/v2/images/${urlData.data.uid}`, {
              headers : {
                'Authorization' : `Bearer ${API_KEY}`
              }
            });
      
            const imageUrl = urlResponse.data;
      
            res.status(200).json({ imageUrl });
          }, 5000);
    }).catch((err) => {
        res.json(err), 500;
    })
})



// routes.get('/getImage/:id', (req, res) => {
//     axios.get(`https://api.bannerbear.com/v2/images/${req.params.id}`, {
//         headers : {
//             'Authorization' : `Bearer ${WBK_HOOK_URL}`
//         }
//       }).then((response) => {
//         res.json(response.data), 200;
//     }).catch((err) => {
//         res.json(err), 500;
//     })
// })

routes.post('/postInsta', async(req, res) => {
    const url = req.body.url;

    const fs = require('fs');
    const { IgApiClient } = require('instagram-private-api');

    const ig = new IgApiClient();
    const username = 'testhello1222';
    const password = 'testhello';
    const caption = 'testhello';
  // Login
  ig.state.generateDevice(username);
  await ig.account.login(username, password);


    // Read the image and get its dimensions
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, async (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
    
        // Upload image to Instagram
        const publishResult = await ig.publish.photo({
          file: buffer,
          caption: caption,
        });
        console.log('Media posted successfully:', publishResult.media.code);
        res.send({message : "success"})
    });

    })

})



module.exports = routes;
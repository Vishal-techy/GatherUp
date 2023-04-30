const accountSid = 'ACafa5dd6f66dac1e97e894923ca8da35a';
const authToken = '09fdb9f05422285d4b147b8d1354c34d';
const client = require('twilio')(accountSid, authToken);

const recipients = ['whatsapp:+919080111914', 'whatsapp:+919944910314']

recipients.forEach(recipient => {
client.messages
    .create({
        body: 'Ada',
        from: 'whatsapp:+14155238886',
        to: recipient
    })
    .then(message => console.log(message.sid))
});

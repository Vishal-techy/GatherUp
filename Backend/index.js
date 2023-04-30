require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

// Routes 
const createEvent = require('./routes/createEvent')
const events = require('./routes/events')
const registerForEvent = require('./routes/registerForEvent')
const sendMessage = require('./routes/sendMessage')
const payment = require('./routes/payments')
const sendMail = require('./routes/sendMail')
const createImage = require('./routes/createImage')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db_ = mongoose.connection
db_.on('error', (error) => console.error(error))
db_.once('open', () => console.log('[STATUS] Connected to Database'))

const app = express()
const port = process.env.PORT

const cors = require('cors')
const db = require('./models');


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/createEvent', createEvent)
app.use('/events', events)
app.use('/registerForEvent', registerForEvent)
app.use('/sendMessage', sendMessage)
app.use('/payment', payment)
app.use('/sendMail', sendMail)
app.use('/createImage', createImage)

app.use(express.static(__dirname + '/../templates'));

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
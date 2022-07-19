const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./Routes/restaurant')

const hostname = 'localhost'
const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use('/',routes)


app.listen(PORT , ()=> {
    console.log(`server running at :  http://${hostname}:${PORT}/`)
})

const express = require('express')
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
require("dotenv/config")

const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

const testroute = require("./routes/signup")



app.use('/route',testroute)

app.get('/',(req,res) => {
    res.send("working biatch")
})





const  url  =  "mongodb://localhost:27017/sallo-synapse"
const  connect  =  mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
connect.then(db  =>  {
    console.log("connected correctly to the server")})

PORT = process.env.port || 4500

app.listen(PORT, () => {
    console.log("Antena fixed")
})
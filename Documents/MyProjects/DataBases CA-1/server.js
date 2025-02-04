const express = require('express')
const mongoose = require('mongoose')
const RestItem = require('./item')
const RestDetail = require('./restaurant')
const app = express()

PORT = 8787
app.use(express.json())


app.get("/ping",(req,res)=>{
    res.send("pong")
})

app.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`)
})

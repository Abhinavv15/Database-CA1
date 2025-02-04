const mongoose = require('mongoose')

const Item = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    }
})

const RestItem = mongoose.model("Items",Item)
module.exports={RestItem}
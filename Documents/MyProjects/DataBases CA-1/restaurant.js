const mongoose = require('mongoose')

const Details = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    Items:{
        type: [String]
    }
})

const RestDetail = mongoose.model("RestaurantDetail",Details)
module.exports={RestDetail}
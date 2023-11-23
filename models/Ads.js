const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const AdsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
})

const Ads = mongoose.model("restaurants", AdsSchema)

module.exports=Ads
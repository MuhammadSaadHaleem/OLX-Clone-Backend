const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const OlxAdsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },

    image_url:{
        type:String
    }
})

const OlxAds = mongoose.model("olxAds", OlxAdsSchema)

module.exports=OlxAds
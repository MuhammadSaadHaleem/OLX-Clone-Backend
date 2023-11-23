const express = require("express");
const router = express.Router();

//localhost:3000/ads
router.use('/ads', require('./ads'))

//localhost:3000/users
router.use('/users', require('./user'))

//localhost:3000/olxAds
router.use('/olx', require('./olxAds'))



module.exports = router
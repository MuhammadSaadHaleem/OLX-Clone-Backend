const express = require("express");
const router = express.Router();
const Ads = require('../models/Ads')

//localhost:3000/ads

router.get('/', async (req, res) => {
    try {
        const ads = await Ads.find({})

        res.send({
            message: 'data fetched saad',
            data: ads
        })
    } catch (e) {
        res.send({
            message: e
        })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const ads = await Ads.findone({})

        res.send({
            message: 'data fetched saad',
            data: ads
        })
    } catch (e) {
        res.send({
            message: e
        })
    }

})

//localhost:3000/ads/addData

router.post('/addData', async (req, res) => {
    try {
        const ad = new Ads(req.body);
        const data = await ad.save()

        res.send({
            message: 'data added successfully',
            data
        })
    } catch (e) {
        res.send({
            message: e
        })
    }
})

// localhost:3000/ads/updateData
router.put('/updateData/:id', async (req, res) => {
    try {
        //   const { _id } = req.body
        const data = await Ads.findOneAndUpdate({ _id: req.params.id }, req.body);

        res.send({
            message: 'data updated successfully',
            data
        })
    } catch (e) {
        res.send({
            message: e
        })
    }
})

//localhost:3000/ads/deleteData
router.delete('/deleteData/:id', async(req, res) => {
    //delete data from db
    try {
        const data= await Ads.deleteOne({_id:req.params.id},req.body);
        res.send({
            message: 'data deleted successfully'
        })
    }

    catch (e) {
        res.send({
            message: e
        })
    }

})

module.exports = router


/*
fetch('http://localhost:4000/ads/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: 'Infinix Hot 8',
          description: 'dslada',
          price: 100
      })
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log('e --->', e))
*/
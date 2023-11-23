const express=require("express")
const router=express.Router();
const OlxAds =require("../models/OlxAds")


router.get ("/" ,async (req,res)=>{
    
    
    try {
        const ads = await OlxAds.find({})

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
        const ads = await OlxAds.findOne({_id:req.params.id})

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



router.post("/addData", async(req,res)=>{

    try{

        const olxAd = new OlxAds(req.body);
        const data =await olxAd.save()

        res.send({
            message: 'data added successfully',
            data
        })

    }

    catch(e){
        res.send({
            message:e
        })
    }



})

module.exports = router

const Notification = require("../models/VendorNotifcation")
const {verifyToken } = require("./verifyToken");
const router = require("express").Router(); 


// create 

router.post("/", verifyToken, async (req, res) => {
    
        const newNotify = new Notification(req.body)

        try{
            const savedNotify = await newNotify.save();
            res.status(200).json(savedNotify);
        }catch(err){
            res.status(500).json(err);
        }
  });




  module.exports = router ; 
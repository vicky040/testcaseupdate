const Assign = require("../models/Vendorassign")
const {verifyToken } = require("./verifyToken");
const router = require("express").Router(); 



// create

router.post("/", verifyToken, async (req, res)=> {
     
    const newVendorAssign = new Assign(req.body);
  
    try {
      const savedVendor = await newVendorAssign.save();
      res.status(200).json(savedVendor);
    } catch (err) {
      res.status(500).json(err);
    }


})



module.exports = router 
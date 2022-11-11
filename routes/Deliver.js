const {verifyToken } = require("./verifyToken");
const router = require("express").Router(); 



router.post("/" , verifyToken , async(req,res)=> {
    res.status(200).json({
        sucess:true , 
        message:"delivered to customer"
    })
})


module.exports = router ;
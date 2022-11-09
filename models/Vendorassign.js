const mongoose = require("mongoose");


const AssignSchema = new mongoose.Schema(
    {

        name:{type:String , required:true },
        mobile:{type:String , required:true},
        status:{type:String , default:"delivered to customer"}

    }
)


  
module.exports = mongoose.model("Assign", AssignSchema);
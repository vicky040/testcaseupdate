const mongoose = require("mongoose");


const AssignSchema = new mongoose.Schema(
    {

        name:{type:String , required:true },
        mobile:{type:String , required:true},
        

    }
)


  
module.exports = mongoose.model("Assign", AssignSchema);
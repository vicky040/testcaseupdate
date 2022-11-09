const mongoose = require("mongoose");


const NotificationSchema = new mongoose.Schema(
    {
        orderId:{ type:String , required:true},
        status:{type:String , default:"In-Transit"}
    }
)
    
      
  
  module.exports = mongoose.model("Notification", NotificationSchema);
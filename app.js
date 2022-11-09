const express = require("express")
const UserRouter = require("./routes/User")
const ProductRouter = require("./routes/Product")
const CartRouter = require("./routes/Cart")
const OrderRouter = require("./routes/Order")
const VendorNotification = require("./routes/VendorNotification")
const VendorAssign = require("./routes/VendorAssign")

const app = express() ; 



app.use(express.json())

app.use("/api" , UserRouter)
app.use("/api/products" ,  ProductRouter)
app.use("/api/cart" , CartRouter)
app.use("/api/order" , OrderRouter)
app.use("/api/notification" , VendorNotification)
app.use("/api/assign" , VendorAssign)






module.exports = app 
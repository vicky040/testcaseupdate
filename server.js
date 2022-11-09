const app = require("./app")
const dotenv = require("dotenv");
const db = require('./config/database');

dotenv.config()



// connect database 
db();

app.get("/" , (req,res)=> {
     res.send("its running ")
})

const port = process.env.PORT 
app.listen(port , ()=> {
    console.log(`server is running on : ${port}`);
})
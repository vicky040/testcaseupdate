const mongoose = require('mongoose')

const db = ()=> {mongoose.connect("mongodb+srv://vicky:vic@cluster0.3ifpvrn.mongodb.net/TestCase?retryWrites=true&w=majority").then(
    (data)=> {
        console.log(`mongodb is connected on server :${data.connection.host}`);
    }
)}


module.exports = db; 
//to use MongoDB
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    });

module.exports = mongoose;
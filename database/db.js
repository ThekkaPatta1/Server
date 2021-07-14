const mongoose = require('mongoose'); //third party
const URI ="mongodb+srv://dbVatiz:dbVatiz@cluster0.rmbp2.mongodb.net/ThekkaPatta?retryWrites=true&w=majority";
 const connectDB =async()=>{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology : true
    });
    console.log("Database connected")
}

module.exports= connectDB; 

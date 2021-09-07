const mongoose = require('mongoose'); //third party

const Bid = mongoose.model('Bid',{
    UUsername:{
        type: String,
        
    },
    WUsername:{
        type:String,
     
    },
    Wid:{
        type:String,
      
    },
    Bidprice:{
        type:Number,
        required:true 
    },
    Worktime:{
        type:Number,
        required:true
    }
})
module.exports= Bid;
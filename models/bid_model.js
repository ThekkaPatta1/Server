const mongoose = require('mongoose'); //third party

const Bid = mongoose.model('Bid',{
    UUsername:{
        type: String,
        required: true
    },
    WUsername:{
        type:String,
        required:true
    },
    Wid:{
        type:String,
        required:true
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
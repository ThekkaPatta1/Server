const mongoose = require('mongoose'); //third party

const Bid = mongoose.model('Bid',{
    WUsername:{
        type: String,
        required: true
    },
    Wid:{
        type:String,
        required:true
    },
    Bidprice:{
        type:String,
        required:true
    },
    Worktime:{
        type:String,
        required:true
    }
})
module.exports= Bid;
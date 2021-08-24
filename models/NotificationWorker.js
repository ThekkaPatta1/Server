const mongoose = require('mongoose'); //third party
const NotiWorker = mongoose.model('NotiWorker',{
    UUsername:{
        type: String,
        required: true
    },
    WUsername:{
        type: String,
        required: true
    },
    status:{
        type:Boolean,
    },
    nType:{
        type:String,
        required:true
    },
    Workid:{
        type:String,
      
    },
    Wtitle:{
        type:String,
    },
    Hiretime:{
        type:Date,
    },
    Ratenum:{
        type:String
    },
    avgRating:{
        type:String
    },
    Ratetime:{
        type: Date
    }
})
module.exports= NotiWorker;
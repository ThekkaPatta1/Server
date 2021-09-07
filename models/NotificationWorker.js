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
        required:true
    },
    Wtitle:{
        type:String,
    },
    Hireratetime:{
        type:Date,
    },
    Ratenum:{
        type:Number,
    }
})
module.exports= NotiWorker;
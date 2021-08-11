const mongoose = require('mongoose'); //third party

const NotiUser = mongoose.model('NotiUser',{
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
    Bidtime:{
        type:Date,
    }

    
})
module.exports= NotiUser;
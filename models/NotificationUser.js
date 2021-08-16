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
    Workid:{
        type:String,
        required:true
    },
    Wtitle:{
        type:String,
        required:true
    },
    Bidtime:{
        type:Date,
        required:true
    },
    nType:{
        type:String,
        required:true
    }
})
module.exports= NotiUser;
const mongoose = require('mongoose'); //third party

const User = mongoose.model('User',{
    UFullName: {
        type:String,
        required : true
    },
    UAddress: {
        type: String,
        required: true
    },
    UPhoneNo:{
        type : String,
        required: true
    },
    UUsername:{
        type : String,
        required: true
    },
    UPassword:{
        type : String,
        required:true
    },
    Uimage:{
        type: String,
    }
})
module.exports = User;
const mongoose = require('mongoose'); //third party

const Worker = mongoose.model('Worker',{
    WFullName: {
        type:String,
        required : true
    },
    WAddress: {
        type: String,
        required: true
    },
    WPhoneNo:{
        type : String,
        required: true
    },
    WSkills:{
        type:String,
        required:true
    },
    WUsername:{
        type : String,
        required: true
    },
    WPassword:{
        type : String,
        required:true
    },

    Wimage:{
        type: String
    }
    
})
module.exports = Worker;
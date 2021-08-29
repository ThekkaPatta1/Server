const mongoose = require('mongoose'); //third party

const FavWorker = mongoose.model('FavWorker',{
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
    UUsername:{
        type: String
    },
 
    ProfileImg:{
        type: String
    }
    
})
module.exports = FavWorker;
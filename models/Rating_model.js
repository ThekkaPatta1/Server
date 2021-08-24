const mongoose = require('mongoose'); //third party

const Rate = mongoose.model('Rate',{
    Ratenum:{
        type: String
        
    },
    UUsername:{
        type: String
    },
    WUsername:{
        type: String
    },
    Ratetime:{
        type: Date
    }
})
module.exports= Rate;
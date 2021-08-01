const mongoose = require('mongoose'); //third party

const Rate = mongoose.model('Rate',{
    Ratenum:{
        type: String
        
    }
})
module.exports= Rate;
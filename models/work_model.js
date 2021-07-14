const mongoose = require('mongoose');

const Work = mongoose.model('Work',{
    Username: {
        type: String,
        required: true
    },
    Tags:{
        type : String,
        required: true
    },
    PhoneNo:{
        type : String,
        required: true
    },
    Workdescription:{
        type : String,
        required:true
    },
    Wimage:{
        type: String
    }

})
module.exports = Work;
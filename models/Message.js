const mongoose = require('mongoose'); //third party

const Message = new mongoose.Schema(
    {
        conversationId: {
            type: String,
        },
        sender:{
            type:String
        },
        text:{
            type:String
        }
    },

    {timestamps:true}
    )
module.exports = mongoose.model('Message', Message);
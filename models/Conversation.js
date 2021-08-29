const mongoose = require('mongoose'); //third party

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        }
    },

    {timestamps:true}
    )
module.exports = mongoose.model('Conversation', ConversationSchema);
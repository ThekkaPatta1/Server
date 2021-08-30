const express = require('express');
const router = express.Router();
const Message=require('../models/Message')

// add messages
router.post('/messages', async (req,res)=>{
    const newMessage=new Message(req.body)

    try{
        const savedmessage =await newMessage.save();
        res.status(200).json(savedmessage)
    }
    catch(err){
        res.status(500).json(err)

    }
})




// get messages
router.get("/messages/:conid",async (req,res)=>{
    try{
        const messages = await Message.find({
            conversationId:req.params.conid
        })
        res.status(200).json(messages)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;
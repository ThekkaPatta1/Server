const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');



// new Conversation
router.post('/conversation', async (req, res) => {
    try {
        const conversation = await Conversation.find({
            $and: [
                {
                    members: { $in: [req.body.senderId] },
                    members: { $in: [req.body.receiverId] },

                }
            ]

        })

        console.log(conversation.length)
        if (conversation.length === 0) {
            const newConversation = new Conversation({
                members: [req.body.senderId, req.body.receiverId],
            });
            const savedConversation = await newConversation.save()
            res.status(200).json(savedConversation)

        }
        else {
            res.status(300).json('This conversation already exists')
            console.log('This conversation already exists')
        }
    }


    catch (err) {
        res.status(500).json(err)
    }
})

//get conversation of a User
router.get("/conversation/:id", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: {
                $in: [req.params.id]
            }
        })
        res.status(200).json(conversation)
    }
    catch {
        res.status(500).json(err);
    }
})


router.get('/getconversation', async (req, res) => {
    try {
        const conversation = await Conversation.find({
            $and: [{
                members: {
                    $in: [req.body.senderId],
                    $in: [req.body.receiverId]
                }
            }]
        })
        res.status(200).json(conversation)
    }
    catch (err) {
        console.log(err)
    }
})
module.exports = router;
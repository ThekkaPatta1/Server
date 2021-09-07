const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Upload');
const Conversation = require('../models/Conversation');



// new Conversation
router.post('/conversation', upload.fields([]), async (req, res) => {
    try {
        const conversation = await Conversation.find({
            $and: [{
                members: {
                    $in: [req.body.senderId],
                    $in: [req.body.receiverId]
                }
            }]

        })
        if (conversation.length === 0) {
            const newConversation = new Conversation({
                members: [req.body.senderId, req.body.receiverId],
            });
            const savedConversation = await newConversation.save()
            res.status(200).json(savedConversation)

        }
        else {
            res.json('This conversation already exists')
            console.log('This conversation already exists')
        }
    }


    catch (err) {
        res.status(500).json(err)
    }
})

//get conversation of a User
router.get("/conversation/:id", upload.fields([]), async (req, res) => {
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


router.get('/getconversation', upload.fields([]), async (req, res) => {
    console.log(req.query.senderId)
    console.log(req.query.receiverId)
    try {
        await Conversation.find({
            $and: [{
                members: {
                    $in: [req.query.senderId],
                    $in: [req.query.receiverId]
                }
            }]
        }).then((data) => {
            res.status(200).json(data)
            console.log(data)
        })

    }
    catch (err) {
        console.log(err)
    }
})


module.exports = router;
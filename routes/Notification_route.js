const express = require('express');
const { check, validationResult } = require('express-validator');
const NotiUser = require('../models/NotificationUser')
const NotiWorker= require('../models/NotificationWorker')
const router = express.Router();
const upload = require('../Middleware/Upload');


router.get('/notifications/user/:un',(req,res)=>{
    NotiUser.find({UUsername:req.params.un}).sort({"Bidtime":-1})
    .then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})
router.get('/notifications/worker/:un',(req,res)=>{
    NotiWorker.find({WUsername:req.params.un}).sort({"Ratetime":-1})
    .then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})

router.post('/post/notification', upload.fields([]), function (req, res) {
    console.log("Worker notification in progress")
    const dtnow = new Date()
    console.log(dtnow);
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const UUsername = req.body.UUsername
        const WUsername = req.body.WUsername;
        const Wid = req.body.Workid;
        const nType = req.body.nType;
        const Ratenum = req.body.Ratenum;

        const data = new NotiWorker({
            UUsername: UUsername,
            WUsername: WUsername,
            Workid: Wid,
            nType:nType,
            Ratenum:Ratenum
        })
        data.save()
            .then(function (result) {
                console.log(data)
                res.status(201).json({ message: "Worker Post Notification Successful" })
            })// sucessess vayo ki vaena

            .catch(function (err45) {
                res.status(500).json({ error: err45 })
                console.log("error aayo")
            })// error aayo ki aayena
    }
})


module.exports = router;

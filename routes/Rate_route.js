const express = require('express');
const { check, validationResult } = require('express-validator');
const Rate = require('../models/Rating_model');
const router = express.Router();
const upload = require('../Middleware/Upload');

router.post('/rate/post', upload.fields([]), function (req, res) {
    console.log("Worker notification in progress")
    const dtnow = new Date()
    console.log(dtnow);
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const UUsername = req.body.UUsername
        const WUsername = req.body.WUsername;
        const Ratenum = req.body.Ratenum;

        const data = new Rate({
            UUsername: UUsername,
            WUsername: WUsername,
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

router.get('/notirate/worker/:un',(req,res)=>{
    Rate.find({WUsername:req.params.un})
    .then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})


module.exports = router;

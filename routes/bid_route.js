const express = require('express');
const { check, validationResult } = require('express-validator');
const Bid = require('../models/bid_model');
const NotiUser = require('../models/NotificationUser')
const router = express.Router();
const upload = require('../Middleware/Upload');
const date = require('date-and-time');
//bidding work 
router.post('/bid/post', upload.fields([]), function (req, res) {
    const dtnow = new Date()
    console.log(dtnow);
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const UUsername = req.body.UUsername
        const WUsername = req.body.WUsername;
        const Wid = req.body.Wid;
        const Bidprice = req.body.Bidprice;
        const Worktime = req.body.Worktime;
        const nType = req.body.nType;

        const data = new Bid({
            UUsername: UUsername,
            WUsername: WUsername,
            Wid: Wid,
            Bidprice: Bidprice,
            Worktime: Worktime,
        });
        const data2 = new NotiUser({
            UUsername: UUsername,
            WUsername: WUsername,
            Wtitle: Wid,
            Bidtime: dtnow,
            nType: nType
        });
        data.save()
        data2.save()
            .then(function (result) {
                console.log(data)
                console.log(data2)
                res.status(201).json({ message: "Bidding Successful!!!!" })
            })// sucessess vayo ki vaena

            .catch(function (err45) {
                console.log(err45)
                res.status(500).json({ error: err45 })
            })// error aayo ki aayena
    }
})

//for showing all the works who has bid on a work
router.get('/works/bidder/:id', (req, res) => {
    Bid.find({ Wid: req.params.id }).then(data => {
        res.status(200).json(data)
        console.log(data)
    }).catch(err => {
        res.status(400).json({ error: err })
    })
})


// for showing work for a worker where they have already bidded
router.get('/bidded/work/:un',function(req, res){
    const WUsername=req.params.un
    Bid.find({WUsername: WUsername})
        .then(function(data){
            console.log(data)
            res.status(200).json(data);

        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })

})

module.exports = router;
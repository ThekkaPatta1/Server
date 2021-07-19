const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Bid = require('../models/bid_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate')

//bidding work 
router.post('/bid/post',upload.fields([]), (req, res)=>{
    console.log(req.body)
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const WUsername = req.body.WUsername;
        const Wid = req.body.Wid;
        const Bidprice = req.body.Bidprice;
        const Worktime = req.body.Worktime;

        const data = new Bid({
            WUsername: WUsername,
            Wid: Wid,
            Bidprice: Bidprice,
            Worktime: Worktime,
        });
        data.save()
        .then(function (result) {
            return res.status(201).json({ message: "Bidding Successful!!!!" })
        })// sucessess vayo ki vaena
            
        .catch(function (err45) {
            return res.status(500).json({ error: err45 })
            })// error aayo ki aayena
        }
        else {
            //invalid
            res.status(400).json(errors.array());
}
})
module.exports = router;

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Bid = require('../models/bid_model');
const Work = require('../models/work_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate')
const date = require('date-and-time');

// for showing all the works that a user has posted
router.get('/works/posted/:un',(req,res)=>{
    const dtnow = new Date()
    console.log(dtnow);
    Work.find({Username:req.params.un}).then(data=>{
        res.status(200).json({
            data 
        })
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})

router.get('/work/single:id',(req,res)=>{
    const dtnow = new Date()
    console.log(dtnow);
    Work.find({_id:req.params.id}).then(data=>{
        res.status(200).json({
            data 
        })
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})



// for showing all the workers who has bid on a work
router.post('/work/bidder/:id'), function (req, res) {
    Bid.find({ Wid: req.body.Wid })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })

}

router.get('/works/bidder/:id',(req,res)=>{
    Bid.find({Wid:req.params.id}).then(data=>{
        res.status(200).json({data})
        console.log(data)
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})


router.post('/worker/hire/:id'), function (req, res) {

    Work.updateOne({ Wid: req.body.Wid })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })

}

module.exports = router;
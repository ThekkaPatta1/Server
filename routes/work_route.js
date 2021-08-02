const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Bid = require('../models/bid_model');
const Work = require('../models/work_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate')


// for showing all the works that a user has posted
router.get('/works/posted/:un',(req,res)=>{
    Work.find({Username:req.params.un}).then(data=>{
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

// router.get('/works/posted/:un', (req, res) => {
//     console.log("running")
//     Bid.aggregate([{
//         $lookup: {
//             from: 'Bid',
//             localField: 'WUsername',
//             foreignField: 'WUsername',
//             as: 'Worker'
//         }
//     },
//     {
//         $unwind: '$Worker'
//     },
//     {

//     },
//     {
//         $addfields: {
//             "WUsername": '$Worker.WUsername'
//         }
//     },
//     {
//         $match: {
//             $expr: {
//                 $eq: [‘’, ‘123' ] } 
//                 ]).then(data => {
//                     res.status(200).json({
//                         data
//                     })
//                 }).catch(err => {
//                     res.status(400).json({ error: err })
//                 })
// })

router.get('/works/bidder/:id',(req,res)=>{
    console.log('hello mf')
    Bid.find({Wid:req.params.id}).then(data=>{
        res.status(200).json({data})
        console.log(data)
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})

module.exports = router;
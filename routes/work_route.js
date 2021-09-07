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
router.get('/works/posted/:un', (req, res) => {
    const dtnow = new Date()
    console.log(dtnow);
    Work.find({ Username: req.params.un }).then(data => {
        res.status(200).json({
            data
        })
    }).catch(err => {
        res.status(400).json({ error: err })
    })
})

// for showing a single work
router.get('/work/single:id', (req, res) => {
    const dtnow = new Date()
    console.log(dtnow);
    Work.find({ _id: req.params.id }).then(data => {
        res.status(200).json({
            data
        })
    }).catch(err => {
        res.status(400).json({ error: err })
    })
})





//for updating a work table when a worker is hired
router.post('/hire/worker', upload.fields([]), (req, res) => {
    const WUsername = req.body.WUsername;
    console.log(req.body.Wid)
    Work.updateOne({ _id: req.body.Wid }, { status: "On-going", Worker: WUsername })
        .then(function () {
            res.status(200).json({ message: "Updated" })
            console.log("message")
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })
})


router.get('/workhistory/:WUsername', (req, res) => {
    Work.find({Worker : req.params.WUsername }).then(data => {
        res.status(200).json({data})
    }).catch(err => {
        res.status(400).json({ error: err })
    })
})

router.get('/work/history/:UUsername', (req, res) => {
    Work.find({Username : req.params.UUsername }).then(data => {
        res.status(200).json({data})
    }).catch(err => {
        res.status(400).json({ error: err })
    })
})
module.exports = router;
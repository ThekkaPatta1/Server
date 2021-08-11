const express = require('express');
const { check, validationResult } = require('express-validator');
const NotiUser = require('../models/NotificationUser')
const router = express.Router();


router.get('/notifications/user/:un',(req,res)=>{
    console.log(req.params.un)
    NotiUser.find({UUsername:req.params.un}).then(data=>{
        console.log("OT", data)
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})

module.exports = router;

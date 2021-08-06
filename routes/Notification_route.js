const express = require('express');
const { check, validationResult } = require('express-validator');
const NotiUser = require('../models/NotificationUser')
const router = express.Router();


router.get('/notifications/user/:un',(req,res)=>{
    NotiUser.find({Username:req.params.un}).then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({error:err})
    })
})

module.exports = router;

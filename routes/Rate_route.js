const express = require('express');
const { check, validationResult } = require('express-validator');
const Rate = require('../models/Rating_model');
const router = express.Router();
const upload = require('../Middleware/Upload');

//bidding work 
router.post('/rate/post',upload.fields([]), (req, res)=>{
    console.log(req.body)
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const Ratenum = req.body.Ratenum;
        

        const data = new Rate({
            Ratenum: Ratenum
           
        });
        data.save()
        .then(function (result) {
            return res.status(201).json({ message: "Rating Successful!!!!" })
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

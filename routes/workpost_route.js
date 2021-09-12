const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Work = require('../models/work_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate')

//posting work 
router.post('/work/post', upload.single('WorkImg'),function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const Username = req.body.Username;
        const Tags = req.body.Tags;
        const PhoneNo = req.body.PhoneNo;
        const Workdescription = req.body.Workdescription;
        const WorkTitle=req.body.WorkTitle;
        const status="Pending"

            const data = new Work({
                Username: Username,
                Tags: Tags,
                PhoneNo: PhoneNo,
                Workdescription: Workdescription,
                WorkTitle:WorkTitle,
                status:status,
                WorkImg:"/"+req.file.filename,
            });
            data.save()
                .then(function (result) {
                    res.status(201).json({ message: "Work posted success !!!!" })
                })// sucessess vayo ki vaena
                
                .catch(function (err45) {
                    res.status(500).json({ error: err45 })
                })// error aayo ki aayena

    }
    else {
        //invalid
        res.status(400).json(errors.array());
    }
})

//showing work posted
router.get('/work/show', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    Work.find().then(function (data) {
        // console.log(data);
        res.send(data);
    })
})


router.get('/work/single/:id', function(req,res){
    // console.log("this is for showing data")
    // res.send("test show")
    //console.log(req.body)
    Work.findOne({_id : req.params.id})
    .then(function(data){
    console.log(data);
        res.status(200).json(data);
})
.catch(function(e){
    res.status(500).json({error : e})
})
})



// for delete
router.delete('/work/delete/:id', function (req, res) {
    //delete code
    const id = req.params.id;
    Work.deleteOne({ _id: id })
    .then((res)=> {
        res.status(200).json({message:"deleted"})
    })
    .catch((e)=>{
        res.status(500).json({error:e})
    })

})


router.post('/work/update/:_id', function (req, res) {
    console.log(req.body)
    const _id = req.params._id;
    const WorkTitle = req.body.WorkTitle;
    const Workdescription = req.body.Workdescription;
    Work.updateOne({ _id: _id }, {WorkTitle: WorkTitle,Workdescription:Workdescription })
    .then(function () {
        res.status(200).json({message : true})
    })
    .catch(function(err){
        console.log(err)
    })
})




module.exports = router;
const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Worker = require('../models/worker_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate')

router.post('/worker/insert',  upload.single('Wimage'), function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    // res.send(errors.array());
    if (errors.isEmpty) {
        //valid
        const WFullName = req.body.WFullName;
        const WAddress = req.body.WAddress;
        const WPhoneNo = req.body.WPhoneNo;
        const WSkills = req.body.WSkills;
        const WUsername = req.body.WUsername;
        const WPassword = req.body.WPassword;
        const Wimage = req.file.path;
        // const Certifyimage = req.file.path;
   
        bcryptjs.hash(WPassword, 10, function (err, hash) {
            const data = new Worker({
                WFullName: WFullName,
                WAddress: WAddress,
                WPhoneNo: WPhoneNo,
                WSkills: WSkills,
                WUsername: WUsername,
                WPassword: hash,                
                Wimage:"/" + req.file.filename,
                // Certifyimage:"/"+req.file.filename
                
            })
            data.save()
                .then(function (result) {
                    console.log(data);
                    res.status(201).json({ message: "Registration success !!!!" })
                })// sucessess vayo ki vaena
                .catch(function (err45) {
                    res.status(500).json({ error: err45 })
                })// error aayo ki aayena
        })

    }
    else {
        //invalid
        res.status(400).json(errors.array());
    }
})


//Login System .........................
router.post('/worker/login', function (req, res) {
    const Username1 = req.body.WUsername;
    const Password1 = req.body.WPassword;
    console.log(Username1, Password1)
    Worker.findOne({ WUsername: Username1 })
        .then(function (userData1) {
            //if username doesnot exist
            if (userData1 === null) {
                return res.status(401).json({ error: "Invalid Credentials111 !! " })
            }
            // if username exists
            bcryptjs.compare(Password1, userData1.WPassword, function (err, result) {
                if (result === false) {
                    //password worng
                    return res.status(401).json({ error: "Invalid Credentials !!" })
                }
                //then generate token - ticket
                const token = jwt.sign({ UserId: userData1._id }, 'anysecrectkey')
                // res.send(token)
                return res.status(200).json({
                    // message: "Success !!",
                    success:true,
                    token: token,
                    _id: userData1._id
                })
            })
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

router.get('/worker/show', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    Worker.find().then(function (data) {
        // console.log(data);
        res.send(data);
    })
})


router.get('/worker/single/:id', function(req,res){
    // console.log("this is for showing data")
    // res.send("test show")
    //console.log(req.body)
    Worker.findOne({_id : req.params.id})
    .then(function(data){
    console.log(data);
        res.status(200).json(data);
})
.catch(function(e){
    res.status(500).json({error : e})
})
})

// for delete
router.delete('/worker/delete/:id', auth.verifyUser, function (req, res) {
    //delete code
    const id = req.params.id;
    Worker.deleteOne({ _id: id }).then(function () {
        res.send("Deleted !")
    })

})
// for update
router.post('/worker/update/:_id', function (req, res) {
    console.log(req.body)
    const _id = req.params._id;
    const FullName = req.body.FullName;
    const Address = req.body.Address;
    const PhoneNo = req.body.PhoneNo;
    const Username = req.body.Username;
    const Password = req.body.Password;
    Worker.updateOne({ _id: _id }, { FullName:FullName, Address:Address,PhoneNo:PhoneNo,Username: Username,Password:Password })
    .then(function () {
        res.status(200).json({message : true})
    })
    .catch(function(err){
        console.log(err)
    })
})

module.exports = router;
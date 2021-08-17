const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate');
const date = require('date-and-time');


router.post('/user/insert', upload.single('Uimage'), function async(req, res) {
    const errors = validationResult(req);
    // res.send(errors.array());
    if (errors.isEmpty) {
        //valid
        const UFullName = req.body.UFullName;
        const UAddress = req.body.UAddress;
        const UPhoneNo = req.body.UPhoneNo;
        const UUsername = req.body.UUsername;
        const UPassword = req.body.UPassword;
        const Uimage = req.file.path;

        // console.log(us);
        // console.log(add); 
        bcryptjs.hash(UPassword, 10, function (err, hash) {
            const data = new User({
                UFullName: UFullName,
                UAddress: UAddress,
                UPhoneNo: UPhoneNo,
                UUsername: UUsername,
                UPassword: hash,
                Uimage: "/" + req.file.filename,

            });
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
router.post('/user/login', function (req, res) {
    console.log("logging in")
    const Username1 = req.body.UUsername;
    const Password1 = req.body.UPassword;
    console.log(Username1, Password1)
    User.findOne({ UUsername: Username1 })
        .then(function (userData1) {
            //if username doesnot exist
            if (userData1 === null) {
                return res.status(401).json({ error: "Invalid Credentials111 !! " })
            }
            // if username exists
            bcryptjs.compare(Password1, userData1.UPassword, function (err, result) {
                if (result === false) {
                    //password worng
                    return res.status(401).json({ error: "Invalid Credentials !!" })
                }
                //then generate token - ticket
                const token = jwt.sign({ UserId: userData1._id }, 'anysecrectkey')
                // res.send(token)
                return res.status(200).json({
                    // message: "Success !!",
                    success: true,
                    token: token,
                    _id: userData1._id,
                    UUsername: userData1.UUsername

                })
            })
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})

//showing users
router.get('/user/show', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    User.find().then(function (data) {
        // console.log(data);
        res.send(data);
    })
})


router.get('/user/single/:id', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    //console.log(req.body)
    User.findOne({ _id: req.params.id })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })
})

// for delete
router.delete('/user/delete/:id', function (req, res) {
    //delete code
    const id = req.params.id;
    User.deleteOne({ _id: id })
        .then((res)=> {
            res.status(200).json({message:"deleted"})
        })
        .catch((e)=>{
            res.status(500).json({error:e})
        })

})
// for update
router.post('/user/update/:_id', function (req, res) {
    const _id = req.params._id;
    const FullName = req.body.FullName;
    const Address = req.body.Address;
    const PhoneNo = req.body.PhoneNo;
    const Username = req.body.Username;
    const Password = req.body.Password;
    User.updateOne({ _id: _id }, { FullName: FullName, Address: Address, PhoneNo: PhoneNo, Username: Username, Password: Password })
        .then(function () {
            res.status(200).json({ message: true })
        })
        .catch(function (err) {
            console.log(err)
        })
})

module.exports = router;
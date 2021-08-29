const express = require('express');
const { check, validationResult } = require('express-validator');
const FavWorker = require('../models/FavWorker_model');
const router = express.Router();
const upload = require('../Middleware/Upload'); 

const auth = require('../Middleware/Authenticate');

router.post('/favworker/insert', upload.single('ProfileImg'), function async(req, res) {
    console.log(req.body)
    const errors = validationResult(req);
   if (errors.isEmpty) {
        //valid
        const WFullName = req.body.WFullName;
        const WAddress = req.body.WAddress;
        const WPhoneNo = req.body.WPhoneNo;
        const WSkills = req.body.WSkills;
        const WUsername = req.body.WUsername;
        const UUsername = req.body.UUsername;
        const ProfileImg = req.body.ProfileImg;
       
        

        const data = new FavWorker({
            WFullName: WFullName,
            WAddress: WAddress,
            WPhoneNo: WPhoneNo,
            WSkills: WSkills,
            WUsername: WUsername,
            UUsername: UUsername,
            ProfileImg: "/" + ProfileImg
            
        })
        
        data.save()
            .then(function (result) {
                console.log(data);
                res.status(201).json({ message: "Added To Favorites !!!!" })
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

router.get('/favworker/show', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    FavWorker.find().then(function (data) {
        // console.log(data);
        res.send(data);
    })
})


router.get('/favworker/single/:wn', function (req, res) {
       FavWorker.findOne({ WUsername: req.params.wn })
        .then(function (_id) {
           
            res.status(200).json(data);
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })
})


router.get('/fav/worker/:un', function(req, res){
   
    FavWorker.find({UUsername:req.params.un})
    .then(data=>{
                res.status(200).json({
                    data 
                })
                console.log(data)
            }).catch(err=>{
                res.status(400).json({error:err})
            })
})

// for delete
router.delete('/favworker/delete/:id',  function (req, res) {
    //delete code
    const id = req.params.id;
    FavWorker.deleteOne({ _id: id })
    .then(res=>  {
        res.status(200).json({ message: "Remove From favorites !!!!" })
    })
    .catch(err=>{
        res.status(400).json({error:err})
    })

})

module.exports = router;
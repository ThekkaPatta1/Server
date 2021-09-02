const notiuser = require('../models/NotificationUser')
const notiworker = require('../models/NotificationWorker')

// const worker = require('../models/worker_model')
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/test_thekkapatta';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Sending Notification test', () => {


//To send notification about bid done in a work
 it('Sending notification', () => {
 const Notification = {
 'UUsername':'agraj',
 'WUsername':'pode',
 'nType':'bid'
 };
 
 return notiuser.create(Notification)
 .then((pro_ret) => {
expect(pro_ret.UUsername).toEqual('agraj');
expect(pro_ret.WUsername).toEqual('pode');
expect(pro_ret.nType).toEqual('bid');
 });
 });
})

//To view all the notifications of user 

it('viewing the notifications',async()=>{
    const status = await notiuser.find({"UUsername":Object("agraj")})
    return(
        notiuser.find({"UUsername":Object("agraj")})
    )
})

//To send notifcation about hiring to worker
it('Sending notification', () => {
    const Notification = {
    'UUsername':'agraj',
    'WUsername':'pode',
    'nType':'hire',
    'Workid':'6125e6ce66d0842a1cd9bb9e'
    };
    
    return notiworker.create(Notification)
    .then((pro_ret) => {
   expect(pro_ret.UUsername).toEqual('agraj');
   expect(pro_ret.WUsername).toEqual('pode');
   expect(pro_ret.nType).toEqual('hire');
   expect(pro_ret.Workid).toEqual('6125e6ce66d0842a1cd9bb9e')
    });
    });


//To view all the notifications of worker 

it('viewing the notifications',async()=>{
    const status = await notiworker.find({"WUsername":Object("pode")})
    return(
        notiworker.find({"WUsername":Object("pode")})
    )
})
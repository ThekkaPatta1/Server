// use the path of your model
const favv = require('../models/FavWorker_model');

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

describe('Adding fav worker', () => {


    //TO add worker to favourite list
 it('Adding post test anything', () => {
 const favWorker = {
 'WFullName':'pode kumar',
 'WAddress': 'kathmandu',
 'WPhoneNo': '36541585',
 'WSkills': 'plumber',
 'WUsername': 'pode',
 'UUsername': 'agraj',
 };

 return favv.create(favWorker)
 .then((pro_ret) => {
expect(pro_ret.WFullName).toEqual('pode kumar');
expect(pro_ret.WAddress).toEqual('kathmandu');
expect(pro_ret.WPhoneNo).toEqual('36541585');
expect(pro_ret.WSkills).toEqual('plumber');
expect(pro_ret.WUsername).toEqual('pode');
expect(pro_ret.UUsername).toEqual('agraj');
 });
 });
})

//to view the fav worker by username
it("Checking the fav worker added by user",async()=>{
    const status = await favv.find({"UUsername":Object("agraj")})
    return(
        favv.find({"UUsername":Object("agraj")})
    )
})
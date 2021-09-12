const bidwork = require('../models/bid_model')

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

describe('Adding post test', () => {


//To add bids at works
 it('Adding post test anything', () => {
 const Worker = {
 'UUsername':'agraj',
 'WUsername':'pode',
 'Wid':'6125e6ce66d0842a1cd9bb9e',
 'Bidprice': '100',
 'Worktime': '5',
 
 };
 
 return bidwork.create(Worker)
 .then((pro_ret) => {
expect(pro_ret.UUsername).toEqual('agraj');
expect(pro_ret.WUsername).toEqual('pode');
expect(pro_ret.Wid).toEqual('6125e6ce66d0842a1cd9bb9e');
expect(pro_ret.Bidprice).toEqual(100);
expect(pro_ret.Worktime).toEqual(5);
 });
 });
})

//To view bids made by Worker

it("Checking the bid done by worker",async()=>{
    const status = await bidwork.findOne({"WUsername":Object("pode")})
    return(
    bidwork.findOne({"WUsername":Object("pode")})
    )
})



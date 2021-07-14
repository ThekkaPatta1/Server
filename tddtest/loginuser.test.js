// use the path of your model
const user = require('../models/user_model');
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

describe('Register Test', () => {
// the code below is for insert testing
 it('Register testing anything', () => {
 const User = {
 'UFullName':'Agraj Poudel',
 'UAddress': 'Baluwatar',
 'UPhoneNo': '36541585',
 'UUsername':'agraj',
 'UPassword':'agraj'
 };
 
 return user.create(User)
 .then((pro_ret) => {
expect(pro_ret.UFullName).toEqual('Agraj Poudel');
expect(pro_ret.UAddress).toEqual('Baluwatar');
expect(pro_ret.UPhoneNo).toEqual('36541585');
expect(pro_ret.UUsername).toEqual('agraj');
expect(pro_ret.UPassword).toEqual('agraj');
 });
 });
})

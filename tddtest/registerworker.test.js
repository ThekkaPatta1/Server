// use the path of your model
const user = require('../models/worker_model');
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
 const Worker = {
 'WFullName':'Agraj Poudel',
 'WAddress': 'Baluwatar',
 'WPhoneNo': '36541585',
 'WSkills': 'coder',
 'WUsername':'agraj',
 'WPassword':'agraj'
 };
 
 return user.create(Worker)
 .then((pro_ret) => {
expect(pro_ret.WFullName).toEqual('Agraj Poudel');
expect(pro_ret.WAddress).toEqual('Baluwatar');
expect(pro_ret.WPhoneNo).toEqual('36541585');
expect(pro_ret.WSkills).toEqual('coder');
expect(pro_ret.WUsername).toEqual('agraj');
expect(pro_ret.WPassword).toEqual('agraj');
 });
 });
})

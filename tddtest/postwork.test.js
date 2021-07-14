// use the path of your model
const user = require('../models/work_model');
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
// the code below is for insert testing
 it('Adding post test anything', () => {
 const Worker = {
 'Username':'agraj',
 'Tags': 'plumbing',
 'PhoneNo': '36541585',
 'Workdescription': 'I need to fix by shower head',
 };
 
 return user.create(Worker)
 .then((pro_ret) => {
expect(pro_ret.Username).toEqual('agraj');
expect(pro_ret.Tags).toEqual('plumbing');
expect(pro_ret.PhoneNo).toEqual('36541585');
expect(pro_ret.Workdescription).toEqual('I need to fix by shower head');
 });
 });
})

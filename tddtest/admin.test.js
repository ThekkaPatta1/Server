const admins = require('../models/Admin_model')

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

describe('Adding admin', () => {


//Logging in admin

it("Admin Login testing", async()=>{
    const admin ={
        "UUsername":"admin",
        "UPassword":"admin"
    }
    return admins.findOne({admin});

});
})


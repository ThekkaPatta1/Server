// use the path of your model
const foruser = require('../models/user_model');

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
 
 return foruser.create(User)
 .then((pro_ret) => {
expect(pro_ret.UFullName).toEqual('Agraj Poudel');
expect(pro_ret.UAddress).toEqual('Baluwatar');
expect(pro_ret.UPhoneNo).toEqual('36541585');
expect(pro_ret.UUsername).toEqual('agraj');
expect(pro_ret.UPassword).toEqual('agraj');
 });
 });
})

//login user test

it("User Login testing", async()=>{
    const User ={
        "UUsername":"agraj",
        "UPassword":"agraj"
    }
    return foruser.findOne({User});

})
 //update user profile

it("Update User profile", async()=>{
    const pro = await foruser.updateOne({
        "_id":Object("6106bbe05686975e304ef5e3")
    },
    {
        $set:{
            "UPhoneNo":"981818181",
            "UAddress":"test"
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete user profile

it("delete profile",async()=>{
    const status = await foruser.deleteOne({
        "_id":Object("6106bbe05686975e304ef5e3")
    });
    expect(status.ok).toBe(1);
}
)






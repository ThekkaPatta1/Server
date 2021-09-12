// use the path of your model
const workerss = require('../models/worker_model');

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
 
 return workerss.create(Worker)
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

//login testing

it("Worker Login testing", async()=>{
    const Worker ={
        "WUsername":"pode",
        "WPassword":"pode"
    }
    return workerss.findOne({Worker});

})

//update worker profile testing

it("Update worker profile", async()=>{
    const pro = await workerss.updateOne({
        "_id":Object("6118d192ecd6f745f886a9b0")
    },
    {
        $set:{
            "WPhoneNo":"981818181",
            "WAddress":"test"
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete profile

it("delete profile",async()=>{
    const status = await workerss.deleteOne({
        "_id":Object("6118d192ecd6f745f886a9b0")
    });
    expect(status.ok).toBe(1);
}
)

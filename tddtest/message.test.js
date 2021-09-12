const message = require('../models/Message')

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

describe('Sending message', () => {


//To send message
 it('sending message test', () => {
 const mess = {
 'sender':'agraj',
 'text':'This is a message'
  };
 
 return message.create(mess)
 .then((pro_ret) => {
expect(pro_ret.sender).toEqual('agraj');
expect(pro_ret.text).toEqual('This is a message');
 });
 });
})

//To view message by id

it('viewing the messages',async()=>{
    const status = await message.findOne({"conversationId":Object("61235a7702631152ccb49e2c")})
    return(
        message.findOne({"conversationId":Object("61235a7702631152ccb49e2c")})
    )
})
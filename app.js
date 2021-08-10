const express = require('express');
const mongoose = require('mongoose'); //third party
const bodyParser = require('body-parser') //core module
const cors = require('cors');

const connectDB  = require('./database/db');


const Loginuser_route = require('./routes/Loginuser_route');
const Loginworker_route = require('./routes/Loginworker_route');
const workpost_route = require('./routes/workpost_route');
const bid_route= require('./routes/bid_route');
const Admin_route =require("./routes/Admin_route");
const Rate_route = require("./routes/Rate_route");
const work_route =  require('./routes/work_route');
const notiuser_route = require("./routes/Notification_route");
const app = express();
connectDB();
const server = require("http").createServer(app);


const io = require("socket.io")(server,{
    cors: {
        origin: "*",
      }
});

io.on("connection", (socket)=>{
    console.log(socket.id)
})

app.use(express.static("./Images"));
app.use(express.json());
app.use('/Images', express.static(__dirname + "/Images"))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(Loginuser_route);
app.use(Loginworker_route);
app.use(workpost_route);
app.use(bid_route);
app.use(Admin_route);
app.use(Rate_route);
app.use(work_route);
app.use(notiuser_route);


app.listen(550);
server.listen(500);
// app.listen(process.env.PORT);   

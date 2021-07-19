const express = require('express');
const mongoose = require('mongoose'); //third party
const bodyParser = require('body-parser') //core module
const cors = require('cors');

const connectDB  = require('./database/db');


const Loginuser_route = require('./routes/Loginuser_route');
const Loginworker_route = require('./routes/Loginworker_route');
const workpost_route = require('./routes/workpost_route');
const bid_route= require('./routes/bid_route');
const app = express();
connectDB();

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


app.listen(550);
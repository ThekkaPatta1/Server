const { Socket } = require("dgram");
var express = require("express")
var app = express();

var http = require("http").createserver(app);
var io = require("socket.io")(http);

http.listen(500,function(){
    console.log("connected");
    io.on ("connection", function (shocket){
        console.log ("User" + Socket.id);

        Socket.on("notification", function(bid){
            Socket.broadcast.emit("notification", bid);
        });
    });
});
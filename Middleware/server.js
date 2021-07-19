var express = require("express");
var app = express();
 
var http = require("http").createServer(app);
var io = require("socket.io")(http);
 
http.listen(500, function () {
    console.log("Server connected");
 
    io.on("connection", function (socket) {
        console.log("User " + socket.id);
 
        socket.on("messageSent", function (message) {
            socket.broadcast.emit("messageSent", message);
        });
    });
});
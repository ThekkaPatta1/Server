const SocketIO = require('socket.io');

const io = SocketIO(
    options={
      cors:true,
    //   origins:[domain+":"+port],
      origins:"*",
     }
  );

// const io = new Server();

var Socket = {
    emit: function (event, data) {
        console.log(event, data);
        io.sockets.emit(event, data);
    }
};
let interval;

io.on("connection", function (socket) {
    
    if (interval) {
        clearInterval(interval);
    }
    
    interval = setInterval(() => timer(socket), 1000);
    
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });

});

const timer = socket => {

  const response = new Date();
  socket.emit("FromAPI", response);

};


exports.Socket = Socket;
exports.io = io;
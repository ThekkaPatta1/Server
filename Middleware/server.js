const PORT = process.env.PORT || 500

const  Server  = app.liste(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`)
})

const io = require('socket.io')(Server)

io.on('connection',()=>{
    
})
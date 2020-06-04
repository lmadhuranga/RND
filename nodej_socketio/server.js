const express = require('express'); // using express 
const socketIO = require('socket.io'); 
const http = require('http')  
const port = process.env.PORT||3000 // setting the port  
let app = express(); 
let server = http.createServer(app) 
let io = socketIO(server) 

// make connection with user from server side 
io.on('connection', (socket)=>{ 
  console.log('New user connected'); 
  //emit message from server to user 
  socket.emit('newMessage', { from:'wellcome to my server' }); 

  // listen for message from user 
  socket.on('createMessage', (newMessage)=>{ 
    console.log('newMessage', newMessage); 
     // sending to all clients except sender
    socket.broadcast.emit('broadcast', newMessage);
  }); 

  // when server disconnects from user 
  socket.on('disconnect', ()=>{ 
    console.log('disconnected from user'); 
  }); 
}); 

server.listen(port); 

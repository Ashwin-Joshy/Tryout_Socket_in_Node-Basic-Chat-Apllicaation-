const express = require('express');
const socket = require('socket.io')
const app = express();

const server = app.listen(4000, () => {
    console.log('Listening');
})

app.use(express.static('public'));

//socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log('new connection : ', socket.id);

    //handle chat event
    socket.on('chat', (data) => {
        console.log(data);
        io.socket.emit('chat', data)
    })
    
})
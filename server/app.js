const express =  require("express");
const http = require('http');

const SERVER_PORT = 3333;

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: '*' }});

app.get('/', (request, response) => {
    response.send('<h1>Olá, hermanito!</h1>');
});

io.on('connection', (socket) => {
    console.log("Um usuário conectou-se!");

    socket.on('message', (message) => {
        console.log(`Mensagem: ${message}`);
        io.emit('message', `Mensagem: ${socket.id.substring(0, 2)} - ${message}`);
    });

    socket.on('disconnect', () => {
        console.log('Um usuário desconectou-se!');
    });
});

server.listen(SERVER_PORT, () => {
    console.log("\x1b[32m%s\x1b[0m", `Servidor rodando em: http://localhost:${SERVER_PORT}`);
});
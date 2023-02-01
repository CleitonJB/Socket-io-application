const express =  require("express");

const SERVER_PORT = 3333;

const app = express();

app.get('/', (request, response) => {
    response.json({ message: 'Olá, hermanito!' });
});

app.listen(SERVER_PORT, () => {
    console.log("\x1b[32m%s\x1b[0m", `Servidor rodando em: http://localhost:${SERVER_PORT}`);
});
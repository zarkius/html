const https = require('https');
const fs = require('fs');
const express = require('express');
const WebSocket = require('ws');

const app = express();

const server = https.createServer({
cert: fs.readFileSync('/etc/letsencrypt/live/chat.yposteriormente.com/fullchain.pem'),
key: fs.readFileSync('/etc/letsencrypt/live/chat.yposteriormente.com/privkey.pem')
}, app);

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('WebSocket conectado exitosamente!');

  ws.on('message', function incoming(message) {
    console.log('Recibido: %s', message);
    ws.send(`Ecosistema: ${message}`);
  });
});

app.get('/', (req, res) => {
  res.send('Servidor WebSocket seguro en ejecución!');
});

server.listen(3001, function listening() {
  console.log('Servidor WebSocket seguro en marcha en https://localhost:3001');
});

const express = require('express');
const path = require('path');
const port = 8000;

const server = express();
server.use(express.json())
server.use(express.static(path.join(__dirname, '../client/dist')));

server.post('/', (req, res) => res.sendStatus(200));

server.listen(port, () => console.log(`Server connected on http://localhost:${port}/`))
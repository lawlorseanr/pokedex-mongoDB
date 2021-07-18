const express = require('express');
const path = require('path');
const Pokemon = require('../database/index');
const controllers = require('./controllers');

const port = 8000;

const server = express();
server.use(express.json())
server.use(express.static(path.join(__dirname, '../client/dist')));

server.post('/api/pokemon', controllers.pokemon.insert);
server.get('/api/pokemon', controllers.pokemon.retrieve);

server.listen(port, () => console.log(`Server connected on http://localhost:${port}/`))
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getHouses, createHouse, updateHouse, deleteHouse}= require('./controller');

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse);



const SERVER_Port = 4004;
app.listen (SERVER_Port, () => console.log(`listening on ${SERVER_Port}`));
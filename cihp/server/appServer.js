const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const rotaCad = require('./routes/RouteCadastro').router;
const rotaLog = require('./routes/RouteLogin').route;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type', 'Authorization']  
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/cadastro', rotaCad);
app.use('/Login', rotaLog);

module.exports = {app};
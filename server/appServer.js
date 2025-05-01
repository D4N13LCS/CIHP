const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const rotaCad = require('./routes/voluntarios/RouteCadastro');
const rotaLog = require('./routes/voluntarios/RouteLogin').route;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/cadastro', rotaCad);
app.use('/Login', rotaLog);

module.exports = app;

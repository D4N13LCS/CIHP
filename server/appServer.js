const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const rotaCad = require('./routes/voluntarios/RouteCadastro');
const rotaLog = require('./routes/voluntarios/RouteLogin');
const volprofile = require('./routes/voluntarios/ProfileConfig');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/cadastro', rotaCad);
app.use('/Login', rotaLog);
app.use('/voluntario', volprofile);

module.exports = app;

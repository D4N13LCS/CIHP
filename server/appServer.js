const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const VolrotaCad = require('./routes/voluntarios/RouteCadastro');
const VolrotaLog = require('./routes/voluntarios/RouteLogin');
const volprofile = require('./routes/voluntarios/ProfileConfig');
const InstrotaCad = require('./routes/instituicoes/RouteCadastro');
const InstrotaLog = require('./routes/instituicoes/RouteLogin');
const vagas = require('./routes/vagas/geral');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/cadastro/voluntario', VolrotaCad);
app.use('/Login/voluntario', VolrotaLog);
app.use('/voluntario', volprofile);

app.use('/cadastro/instituicao', InstrotaCad);
app.use('/Login/instituicao', InstrotaLog);
app.use('/vagas', vagas);

module.exports = app;

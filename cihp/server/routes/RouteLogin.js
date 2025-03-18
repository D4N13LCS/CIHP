const express = require('express');
const db = require('../cihpDB').pool;
const jwt = require('jsonwebtoken');
const route = express.Router();


route.post('/', (req, res)=>{
    db.getConnection((err, conex)=>{
        if(err){
            conex.release();
            return res.status(500).send({'erro': err})
        }
        
        conex.query('SELECT voluntario_id, voluntario_name, voluntario_key FROM voluntarios WHERE voluntario_name = ? AND voluntario_key = ?', 
        [req.body.username, req.body.key],
        (err, result)=>{
            conex.release();
            if(err){
                return res.status(500).send({"err": err});
            }

            if (result.length === 0){
                return res.status(404).send({message: "Usuário ou senha inválidos"});
            }

            const token = jwt.sign({id: result[0].id, username: result[0].username}, 'senha', {expiresIn: "2h"});

            return res.status(200).send({resultado: result, 
                message: `Seja Bem vindo(a), ${result[0].username}!`,
            token: token});
        })
    })
})

function Autenticar(req, res, next){
    const auth = req.headers.authorization;

    if(!auth){
        return res.status(404).send({message: "Token não fornecido"})
    }

    const token = auth[1].split(" ");

    jwt.verify(token, 'senha', (err, decoded)=>{
        if(err){ return res.status(401).send({erro: "Falha na autenticação do token"})}
        
        req.user = decoded;

        next();
    })
}



module.exports = {route, Autenticar};
const express = require('express');
const db = require('../../cihpDB');
const jwt = require('jsonwebtoken');
const route = express.Router();


route.post('/voluntario', (req, res)=>{
    db.getConnection((err, conex)=>{
        if(err){
            conex.release();
            return res.status(500).send({'erro': err})
        }
        
        conex.query('SELECT voluntario_id, voluntario_name, voluntario_key, voluntario_email FROM voluntarios WHERE voluntario_name = ? AND voluntario_key = ?', 
        [req.body.username, req.body.key],
        (err, result)=>{
            conex.release();
            if(err){
                return res.status(500).send({err});
            }

            if (result.length === 0){
                return res.status(404).send({message: "Usuário ou senha inválidos"});
            }

            const token = jwt.sign({id: result[0].voluntario_id, username: result[0].voluntario_name, email: result[0].voluntario_email}, 'senha', {expiresIn: "2h"});
            
            jwt.verify(token, 'senha', (err, decoded)=>{
                if (err){return res.status.send({err})}
                req.decoded = decoded
            })

            return res.status(200).send({resultado: result, 
                message: `Seja Bem vindo(a), ${result[0].voluntario_name}!`,
            token: token, info: req.decoded});
        })
    })
})

module.exports = route;

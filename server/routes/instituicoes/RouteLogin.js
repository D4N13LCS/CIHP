const express = require('express');
const db = require('../../cihpDB');
const jwt = require('jsonwebtoken');
const route = express.Router();


route.post('/', (req, res)=>{
    db.getConnection((err, conex)=>{
        if(err){
            conex.release();
            return res.status(500).send({'erro': err})
        }
        
        conex.query('SELECT id_instituicao, nome, cnpj,  email, tipo FROM Instituicoes WHERE nome = ? AND senha = ?', 
        [req.body.nome, req.body.senha],
        (err, result)=>{
            conex.release();
            if(err){
                return res.status(500).send({err});
            }

            if (result.length === 0){
                return res.status(404).send({message: "Usuário ou senha inválidos"});
            }

            const token = jwt.sign({id: result[0].id_instituicao, username: result[0].nome, email: result[0].voluntario_email, tipo: result[0].tipo}, 'senha2', {expiresIn: "2h"});
            
            jwt.verify(token, 'senha2', (err, decoded)=>{
                if (err){return res.status.send({err})}
                req.decoded = decoded
            })

            return res.status(200).send({resultado: result, 
                message: `Seja Bem vindo(a), ${result[0].nome}!`,
            token: token, info: req.decoded});
        })
    })
})

module.exports = route;

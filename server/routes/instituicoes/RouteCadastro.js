const express = require('express');
const pool = require('../../cihpDB');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/', (req, res)=>{
    pool.getConnection((err, conex)=>{
        if (err){ res.status(500).send({err})}

        conex.query('INSERT INTO Instituicoes(nome, cnpj, email, senha, tipo) VALUES (?, ?, ?, ?, ?)', [req.body.nome, req.body.cnpj, req.body.email, req.body.senha, req.body.tipo], (err, result)=>{
            
            if (err){
                conex.release();
                return res.status(500).send({err})
            }
            conex.release()
            return res.status(200).send({msg: 'Cadastro realizado com sucesso', result})
        })
    })
})


module.exports = router;

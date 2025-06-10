const express = require('express');
const pool = require('../../cihpDB');
const router = express.Router();
const auth = require('../Middlewares/auth');

router.get('/', (req, res)=>{
    pool.getConnection((err, conex)=>{
        conex.release();
        if (err){ return res.status(500).send({err})};

        conex.query('SELECT * FROM vagas', (err, result)=>{
            conex.release();
            if (err){ return res.status(500).send({err})};

            return res.status(200).send({result})
        })
    })
})

router.post('/:id/Inscricao', auth, (req,res)=>{
    pool.getConnection((err, conex)=>{
        if(err){res.status(500).send({err})}
        
        conex.query('INSERT INTO Inscricoes(vaga_id, id_voluntario, data_inscricao) VALUES (?, ?, ?)', [req.params.id, req.body.id_voluntario, req.body.data], (err, result)=>{
            if(err){ return res.status(500).send({err})}

            return res.status(200).send({msg: 'Inscrição realizada com sucesso!'})
        })
    })
})

module.exports = router;
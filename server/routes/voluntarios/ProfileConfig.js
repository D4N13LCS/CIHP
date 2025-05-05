const express = require('express');
const db = require('../../cihpDB.js');
const auth = require('../Middlewares/auth');
const upload = require('../Middlewares/upload');
const route = express.Router();

route.get('/:id/profile-photo', auth, (req, res)=>{
    db.getConnection((err, conex)=>{
        if(err){return res.status(500).send({err})}
        conex.query('SELECT voluntario_photo FROM voluntarios WHERE voluntario_id = ?', [req.params.id], (err, result)=>{
            conex.release();
            if(err){return res.status(500).send({err})};
            if (result.length === 0){
                return res.status(404).send({message: 'Voluntário não encontrado'})
            }
            return res.status(200).send({pic: result[0].voluntario_photo})
        })
    })
})

route.put('/edit/:id/profile-photo', auth, upload.single('photo'), (req, res)=>{
    if (!req.file){return res.status(500).send({message: 'Nenhuma imagem enviada'})}

    db.getConnection((err, conex)=>{
        if (err){return res.status(500).send({err})}
        conex.query('UPDATE voluntarios SET voluntario_photo = ?, voluntario_name = ?, voluntario_email = ? WHERE voluntario_id = ?', [req.file.path, JSON.parse(req.body.user).nome, JSON.parse(req.body.user).email, req.params.id], (err, result)=>{
            conex.release()
            if (err){return res.status(500).send({err})}

            return res.status(200).send({message: 'Foto de perfil atualizada com sucesso', pic: req.file.path})
        })
    })
})

route.delete('/delete/:id', auth, (req, res)=>{
    db.getConnection((err, conex)=>{
        if (err){return res.status(500).send({err})}

        conex.query('DELETE FROM voluntarios WHERE voluntario_email = ? AND voluntario_key = ? AND voluntario_id = ?', [req.body.email, req.body.senha, req.params.id], (err, result)=>{
            if (err){ return res.status(500).send({err})}

            return res.status(200).send({message: 'Usuário excluído com sucesso'})
        })
    })
})

module.exports = route;